
from typing import List, Dict
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView

from functools import lru_cache
import httpx

import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from django.conf import settings
from django.core.cache import cache

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView

from decouple import config
from urllib3.exceptions import HTTPError

from .serializers import MovieSerializer, SeriesSerializer

from .models import  Movie, Genre, Series

# Create your views here.

BASE_URL = config("TMDB_BASE_URL")
API_KEY = config("TMDB_API_KEY")


class MiscOperations:

    @staticmethod
    def handle_casts(casts: List) -> List:
        if isinstance(casts, list):
            data = []
            for cast in casts:
                gender = cast.get('gender', 0)
                original_name = cast.get('original_name', None)
                profile_path = cast.get('profile_path', None)
                if profile_path:
                    profile_path = f"https://image.tmdb.org/t/p/w300{profile_path}"
                data.append({
                    'gender': gender,
                    'original_name': original_name,
                    'profile_path': profile_path
                })
            return data
        raise TypeError("Data must be a list of dicts")

    @staticmethod
    def handle_directors(crew: List) -> Dict:
        if isinstance(crew, list):
            director = list(filter(lambda x: x['job'] == 'Director', crew))
            return director[0] if director else {}

    @staticmethod
    def generate_poster_path_url(url):
        return f"https://image.tmdb.org/t/p/w300{url}"

    @staticmethod
    def generate_banner_url(url):
        return f"https://image.tmdb.org/t/p/original{url}"

    @staticmethod
    def extract_information(information: Dict) -> Dict:
        if isinstance(information, dict) is None:
            raise ValueError(f"{information} needs to be JSON")
        id = information.get('id', None)
        overview = information.get('overview', None)
        title = information.get('original_title', None)
        release_date = information.get("release_date", None)
        adult = information.get('adult')
        language = information.get('spoken_languages', None)
        genre = information.get('genres', None)
        poster_path = information.get('poster_path', None)
        banner = information.get('backdrop_path', None)
        cast_credits = information.get('credits', None)
        key = ''
        site = ''
        videos = information.get('videos', None)
        if videos:
            results = videos.get('results', None)
            if len(results) > 0:
                result = results[0]
                key = result.get('key', None)
                site = result.get('site', None)
        cast = []
        director = []
        if cast_credits:
            casts = cast_credits.get('cast', None)
            crews = cast_credits.get('crew', None)
            cast = MiscOperations.handle_casts(casts)
            director = MiscOperations.handle_directors(crews)

        poster_url = MiscOperations.generate_banner_url(poster_path) if (
            poster_path) else None
        banner_url = MiscOperations.generate_banner_url(banner) if (
            banner) else None

        return {"id": id, "overview": overview, "original_title": title,
                "adult":
                    adult, "release_date": release_date,
                "language": language,
                "genre": genre, "poster_path": poster_url, 'banner':
                    banner_url, 'type': 'movie',
                'casts': cast,
                'director': director,
                'key': key,
                'site': site
                }


class MyHttpsFetcher:
    """ custom class wrapper around httpx package """
    headers = {
        'accept': "application/json",
        'Authorization': f"Bearer {API_KEY}"
    }
    client = httpx.Client()

    @lru_cache(maxsize=100, typed=True)
    def build_tmdb_movies_url(self, query_type: str = None,
                              query_page: int =
                              1, query_string: str = None,
                              query_category:str = None, movie_id: int = None):
        if query_string and query_category:
            url = f"{BASE_URL}/search/movie?query={query_string}"
        elif movie_id:
            url = f"{BASE_URL}/movie/{movie_id}?append_to_response=videos%2Ccredits&languages=en-US"
        elif query_type:
            url = f"{BASE_URL}/movie/{query_type}?language=en-US&page={int(query_page)}"
        else:
            raise ValueError("Please provide a query type")
        return url

    @lru_cache(maxsize=100, typed=True)
    def build_tmdb_series_url(self, query_type: str = None,
                              query_page: int =
                              1, query_category: str = None, query_string:
            str = None, series_id: int = None):
        print(query_string)
        if query_string and query_category:
            url = f"{BASE_URL}/search/tv?query={query_string}"
        elif series_id:
            url = ""
        elif query_type:
            url = f"{BASE_URL}/tv/{query_type}?language=en-US&page={int(query_page)}"
        else:
            raise ValueError("Please provide a query type")
        return url

    def fetch_data_and_parse(self, url: str ) -> dict :
        """Fetch data from TMDB and return parsed JSON response.
            Args:
                url: The TMDB API endpoint URL

            Returns:
                dict: Parsed JSON response

            Raises:
                HTTPStatusError: If the request fails
        """
        try:
            response = self.client.get(url=url, headers=self.headers)
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            raise HTTPError(F"TMDB error: {e}") from e
        except httpx.RequestError as e:
            raise HTTPError(f"Network error while calling TMDB: {e}") from e
        except Exception as e:
            raise HTTPError(f"An unexpected error occurred: {e}") from e


class GetAllMovies(ListAPIView, MiscOperations):
    """ get all the movies based on the query type """
    my_httpx = MyHttpsFetcher()

    def get(self, request, *args, **kwargs):
        query = request.query_params
        query_type = query.get('type', None)
        query_string = query.get('q', None)
        query_category = query.get('category', None)
        query_page = query.get('page', 1)
        possible_queries = ['popular', 'top_rated', 'upcoming']
        query_by_string = []
        if query_type in possible_queries:
            return self.handle_query(query_type, query_page)
        elif query_string and query_category:
            return self.handle_search(query_string, query_category)
        else:
            return Response({"data": "Invalid specified parameter"}, status=status.HTTP_400_BAD_REQUEST)

    def handle_query(self, query_type, query_page):
        get_cache = cache.get(f"{query_type}_{query_page}_movies")
        if get_cache is None:
            built_url = self.my_httpx.build_tmdb_movies_url(
                query_type=query_type, query_page=query_page)
            response = self.my_httpx.fetch_data_and_parse(built_url)
            filtered_data = self.get_necessary_data(response['results'],
                                                    query_type)
            response['results'] = filtered_data
            cache.set(f"{query_type}_{query_page}_movies", response)
            return Response({"data": response}, status=status.HTTP_200_OK)
        else:
            return Response({"data": get_cache}, status=status.HTTP_200_OK)

    def handle_search(self, query_string, query_category):
        query_string = query_string.replace(" ", "%20")
        search_url = self.my_httpx.build_tmdb_movies_url(
            query_string=query_string,
            query_category=query_category)
        response = self.my_httpx.fetch_data_and_parse(search_url)  # get
        response['results'] = self.get_necessary_data((
            response['results']), query_type="")
        response['type'] = query_category
        return Response({'data': response}, status=status.HTTP_200_OK)

    @staticmethod
    def get_necessary_data(information: Dict, query_type: str) -> List[Dict]:
        if not isinstance(information, list):
            return "Information must be a dict"
        response_list = []
        for info in information:
            original_name = info.get('original_title')
            poster_path = info.get('poster_path')
            release_date = info.get('release_date', None)
            id = info.get('id', None)
            rating = info.get('vote_average', None)
            genre = info.get('genre_ids', [])
            if query_type == "top_rated":
                response_list.append({
                    'id': id,
                    "original_name": original_name,
                    'poster_path':MiscOperations.generate_poster_path_url(
                        poster_path),
                    'release_date': release_date,
                    'genre': genre,
                    'rating': rating/2,
                    'type': 'movies'
                })
            else:
                response_list.append({
                    'id': id,
                    "original_name": original_name,
                    'poster_path': MiscOperations.generate_poster_path_url(
                        poster_path),
                    'release_date': release_date,
                    'genre': genre,
                'type': 'movies'

                })
        return response_list


class GetMovieInfo(RetrieveAPIView, MiscOperations):
    serializer_class = MovieSerializer
    lookup_field = 'id'
    queryset = Movie.objects.all()
    https = MyHttpsFetcher()

    def get(self, request, *args, **kwargs):
        movie_id = kwargs.get('id')
        movie = self.queryset.filter(id=movie_id).first()
        if movie is None:
            movie_url = self.https.build_tmdb_movies_url(movie_id=movie_id)
            json_response = self.https.fetch_data_and_parse(movie_url)
            extracted_data = self.extract_information(json_response) # id,
            serializer = self.get_serializer(data=extracted_data)
            try:
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    return Response({"data": extracted_data},
                                status=status.HTTP_200_OK)
            except serializers.ValidationError:
                return Response({"data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = MovieSerializer(movie)
            return Response({"data": serializer.data},
                            status=status.HTTP_200_OK)


class GetAllSeries(ListAPIView):
    my_httpx = MyHttpsFetcher()

    def get(self, request, *args, **kwargs):
        query = request.query_params
        query_type = query.get('type', None)
        query_page = query.get('page', 1)
        query_string = query.get('q', None)
        query_category = query.get('category', None)
        possible_queries = ['popular', 'top_rated', 'on_the_air']
        if query_type in possible_queries:
            return self.handle_query(query_type, query_page)
        elif query_string and query_category:
            return self.handle_search(query_string, query_category)
        else:
            return Response({'data': 'Please provide a valid query type'},
                            status=status.HTTP_400_BAD_REQUEST)

    def handle_query(self, query_type, query_page):
        """ handle queries from FE
        """
        cached_data_page = cache.get(f"{query_type}_{query_page}_series")
        if cached_data_page is None:
            built_url = self.my_httpx.build_tmdb_series_url(
                query_page=query_page, query_type=query_type)
            response = self.my_httpx.fetch_data_and_parse(built_url)
            response = self.get_necessary_data(response['results'],
                                               query_type="")
            cache.set(f"{query_type}_{query_page}_series", response)
            return Response({'data': response}, status=status.HTTP_200_OK)
        return Response({'data': cached_data_page}, status=status.HTTP_200_OK)

    def handle_search(self, query_string, query_category):
        cached_data = cache.get(f"{query_string}_{query_category}_series")
        if cached_data is None:
            built_url = self.my_httpx.build_tmdb_series_url(
                query_category=query_category, query_string=query_string)
            response = self.my_httpx.fetch_data_and_parse(built_url)
            response = self.get_necessary_data(response['results'],
                                               query_type="")
            cache.set(f"{query_string}_{query_category}_series", response)
            return Response({'data': response}, status=status.HTTP_200_OK)
        return Response({'data': cached_data}, status=status.HTTP_200_OK)

    @staticmethod
    def get_necessary_data(information, query_type):
        if not isinstance(information, list):
            raise ValueError ("Information must be a dict")
        response_list = []
        for info in information:
            original_name = info.get('original_name')
            poster_path = info.get('poster_path')
            id = info.get('id', None)
            release_date = info.get('release_date', None)
            response = requests.get(f"{BASE_URL}/tv/{id}", headers={
                'accept': 'application/json',
                'Authorization': f"Bearer {API_KEY}"
            })
            response = response.json()
            fetched_genre = response.get('genres', None)
            rating = info.get('vote_average', None)
            genre = ''
            if fetched_genre:
                genre = fetched_genre[0]['name']
            seasons_count = response.get("number_of_seasons", None)
            if query_type == 'top_rated':
                response_list.append( {
                'id': id,
                "original_name": original_name,
                'poster_path': MiscOperations.generate_poster_path_url(poster_path),
                'seasons_count': seasons_count,
                'genre': genre,
                'release_date': release_date,
                'rating': rating / 2,
                'type': 'series'
                })
            else:
                response_list.append({
                    'id': id,
                    "original_name": original_name,
                    'poster_path': MiscOperations.generate_poster_path_url(poster_path),
                    'seasons_count': seasons_count,
                    'genre': genre,
                    'release_date': release_date,
                'type': 'series'
                })

        return response_list



class GetSeriesInfo(RetrieveAPIView):
    lookup_field = 'id'
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
    my_httpx = MyHttpsFetcher()

    @staticmethod
    def fetch_movie(series_id):
        url = (f"{BASE_URL}/tv/"
               f"{series_id}?append_to_response=videos%2Ccredits&language"
               f"=en"
               f"-US")
        headers = {
            'accept': 'application/json',
            'Authorization': f"Bearer {API_KEY}",
        }
        with httpx.Client() as client:
            try:
                response = client.get(url, headers=headers)
                response.raise_for_status()
                return response.json()
            except httpx.HTTPStatusError as e:
                print(f"Error {e}")
            except Exception as e:
                print(F"An error occurred {e}")
        return None

    def retrieve(self, request, *args, **kwargs):
        series_id = kwargs.get('id', None)
        if series_id is None:
            return
        series = self.queryset.filter(id=series_id).first()
        if series is None:
            request = self.fetch_movie(series_id)
            print(request)
            if not request:
                return Response({'error': 'Failed to fetch series data'},
                                status=status.HTTP_400_BAD_REQUEST)
            filtered_data = self.get_necessary_data(request)
            # series_information = self.get_series_info(series_id,
            #                                           request.get(
            #     'number_of_seasons', None))
            # filtered_data['seasons'] = series_information
            serializer = self.get_serializer(data=filtered_data)
            try:
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response({'data': serializer.data},
                                status=status.HTTP_200_OK)

            except serializers.ValidationError:
                return Response({'data': serializer.errors},
                                status=status.HTTP_400_BAD_REQUEST)
            return Response({'data': 'Unable to fetch data'},
                        status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'data': SeriesSerializer(series).data},
                            status=status.HTTP_200_OK)

    @staticmethod
    def get_necessary_data(information):
       """ function that retrieves the data needed for the frontend
       * banner image
       * id
       * release_date
       * adult
       * poster_path
       * video and key - for embed video
       credits
       original_name
       casts and director
        """
       if not isinstance(information, dict):
           raise TypeError("Information must be dict")
       response_list = []
       overview = information.get('overview', None)
       id = information.get('id', None)
       release_date = information.get('first_air_date', None)
       adult = information.get('adult', False)
       language = information.get('spoken_languages', None)
       poster_path = information.get('poster_path', None)
       banner = information.get('backdrop_path', None)
       genre = information.get('genres', None)
       video = information.get('videos', None)
       series_count = information.get('number_of_seasons', None)
       key = ''
       site = ''
       if video:
           video = video.get('results', [])
           if len(video) > 0:
               video = video[0]
               key = video.get('key', None)
               site = video.get('site', None)
       if poster_path:
           poster_path = f"https://image.tmdb.org/t/p/original{poster_path}"
       if banner:
           banner = f"https://image.tmdb.org/t/p/original{banner}"
       original_name = information.get('original_name', None)
       credits = information.get('credits', None)
       cast = ''
       director = ''
       if credits:
           cast = credits.get('cast', None)
           if cast:
               cast = handle_casts(cast)
           crews = credits.get('crew', None)
           if crews:
               director = handle_directors(crews)
       data = {
            'id': id,
            'release_date': release_date,
            'overview': overview,
            'adult': adult,
            'language': language,
            'poster_path': poster_path,
            'banner': banner,
            'original_name': original_name,
            'genre': genre,
           'key':key,
           'site': site,
           'casts': cast,
           'director': director,
           'number_of_seasons': series_count
        }
       return data


    @staticmethod
    def get_series_info(series_id: int, series_count: int) -> List:
        """ get the episodes based on the season """
        data = []
        episode_list = []
        print('\nNumber of series: ', series_count)
        if isinstance(series_id, int) and isinstance(series_count, int):
            for i in range(1, series_count + 1):
                child_container = []
                request = requests.get(f"{BASE_URL}/tv/{series_id}/season/{i}?append_to_response=videos%2Ccredits&language=en-US",
                                       headers= {
                    'accept': 'application/json',
                    'Authorization': f'Bearer {API_KEY}'
                })
                print(request)
                if request.status_code == 200:
                    json_data = request.json()
                    print(f'\n\t NUmber: {i} in {series_count}: ', json_data)
                    episodes_json = json_data.get('episodes', None)
                    print("\n\t\t\tEpisodes: ", episodes_json)
                    if len(episodes_json) > 0:
                        id = json_data.get('id', None)
                        air_date = json_data.get('air_date')
                        overview = json_data.get('overview')
                        name = json_data.get('name')
                        image = json_data.get('poster_path')
                        key = ''
                        site = ''
                        cast = ''
                        director = ''
                        credits = json_data.get('credits', None)
                        if credits:
                            cast = credits.get('cast', None)
                            crew = credits.get('crew', None)
                            if cast:
                                cast = handle_casts(cast)
                            if crew:
                                director = handle_directors(crew)
                        videos = json_data.get('videos', None)
                        if videos:
                            result = videos.get('results', [])
                            if len(result) > 0:
                                result = result[0]
                                key = result.get('key', None)
                                site = result.get('site', None)
                        if image:
                            image = f"https://image.tmdb.org/t/p/w500{image}"
                        data = {
                            'id': id,
                            'air_date': air_date,
                            'overview': overview,
                            'name': name,
                            'image': image,
                            'key': key,
                            'site': site,
                            'director': director,
                            'casts': cast
                        }
                        season_episode = []
                        if episodes_json:
                            for episode in episodes_json:
                                id = episode.get('id', None)
                                episode_number = episode.get('episode_number', None)
                                overview = episode.get('overview', None)
                                runtime = episode.get('runtime', None)
                                title = episode.get('name', None)
                                image = episode.get('still_path', None)
                                # get key
                                key = ''
                                site = ''
                                cast = ''
                                director = ''
                                request = requests.get(f"{BASE_URL}/tv/"
                                                       f"{series_id}/"
                                                       f"season/{i}/episode"
                                                       f"/{episode_number}?append_to_response=videos%2Ccredits&language=en-US",
                                             headers={
                                                 'accept': 'application/json',
                                                 'Authorization': f"Bearer {API_KEY}"
                                             })

                                if request.status_code == 200:
                                    request = request.json()
                                    extracted_videos_dict = request.get(
                                        'videos', None)
                                    crew = request.get('crew', None)
                                    if crew:
                                        director = handle_directors(crew)
                                    extract_credits = request.get('credits',
                                                                  None)
                                    if extract_credits:
                                        casts = extract_credits.get('cast',
                                                                    None)
                                        if casts:
                                            cast = handle_casts(casts)
                                    if extracted_videos_dict:
                                        videos = extracted_videos_dict.get('results', None)
                                        if len(videos) > 0:
                                            first_videos = videos[0]
                                            key = first_videos.get('key')
                                            site = first_videos.get('site')
                                if image:
                                    image = (f"https://image.tmdb.org/t/p/w500"
                                             f"{image}")
                                result = {
                                    'id': id,
                                    'title': title,
                                    'episode_number': episode_number,
                                    'overview': overview,
                                    'runtime': runtime,
                                    'image': image,
                                    'key': key,
                                    'site': site,
                                    'director': director,
                                    'casts': cast
                                }
                                season_episode.append(result)
                            data['episodes'] = season_episode
                        episode_list.append(data)
            return episode_list
        else:
            raise TypeError("Invalid data type passed")
