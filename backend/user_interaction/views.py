from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.generics import ListCreateAPIView, UpdateAPIView, \
    RetrieveUpdateAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, \
    ListAPIView

from user.models import User
from .serializers import (MovieReactionsSerializer, SeasonRatingSerializer,
                          EpisodeRatingSerializer, WishListSerializer,
                          MovieReviewSerializer, UserReviewModSerializer,
                          UserPreferencesSerializer)
from movie.models import Movie
from user_interaction.models import SavedMovies, UserReviews, UserPreferences

class AuthenticatedMixin:
    permission_classes = [IsAuthenticated]

# class AddWatchList(ListCreateAPIView):
#     serializer_class = ''
#     def create(self, request, *args, **kwargs):
#         user = request.user
#         movie = request.data
#         movie_type = movie.get(
#             'type')  # Ensure we handle missing 'type' gracefully
#
#         # Check if saved movies list exists for the user
#         saved_movies = self.get_queryset().first()
#         if not saved_movies:
#             saved_movies = SavedMovies.objects.create(user=user)
#
#         # Initialize a flag to track duplicates
#         exists = False
#
#         # Match the type of media and check for duplicates
#         match movie_type:
#             case "movie":
#                 exists = saved_movies.movies.filter(id=movie['id']).exists()
#                 if not exists:
#                     saved_movies.movies.add(
#                         movie['id'])  # Add the movie to the watchlist
#             case "series":
#                 exists = saved_movies.series.filter(id=movie['id']).exists()
#                 if not exists:
#                     saved_movies.series.add(
#                         movie['id'])  # Add the series to the watchlist
#             case "episode":
#                 exists = saved_movies.episodes.filter(id=movie['id']).exists()
#                 if not exists:
#                     saved_movies.episodes.add(
#                         movie['id'])  # Add the episode to the watchlist
#             case _:
#                 return Response(
#                     {
#                         'error': 'Invalid type. Must be one of: movie, series, episode'},
#                     status=status.HTTP_400_BAD_REQUEST
#                 )
#
#         if exists:
#             return Response(
#                 {'data': f'{movie_type.capitalize()} already in watchlist'},
#                 status=status.HTTP_400_BAD_REQUEST)
#
#         # Save the updated watchlist and serialize the response
#         saved_movies.save()
#         serializer = self.get_serializer(saved_movies)
#         return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)



class MovieReactions(AuthenticatedMixin, RetrieveUpdateAPIView):
    serializer_class = MovieReactionsSerializer
    lookup_field = 'id'
    # queryset = Movie.objects.all()

    def get_queryset(self):
        movie = Movie.objects.filter(id=self.request.data).first()
        return movie

    # def put(self, request, *args, **kwargs):
    #     movie = self.get_queryset()
    #     if movie:
    #         vote_type = request.data['action']
    #         match vote_type:
    #             case 'like':
    #                 movie.rating += 1
    #                 break
    #             case 'dislike':
    #                 pass

class UserPreferencesView(AuthenticatedMixin, ListCreateAPIView):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer


    def list(self, *args, **kwargs):
        query = self.get_queryset().filter(user=self.request.user).first()
        if query:
            serializer = self.get_serializer(query)
            print(serializer.data)
            return Response({'data': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'User has not set any preferences based on genre'}, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=request.user)
            return Response({'data': serializer.data},
                            status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            return Response({'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


        return Response(status=status.HTTP_200_OK)



class UpdateDestroyMyReview(AuthenticatedMixin, RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = UserReviewModSerializer
    queryset = UserReviews.objects.all() # get all the reviews

    # def destroy(self, request, *args, **kwargs):
    #     """ destroy a review """
    #     queryset = self.get_queryset()


class AllUserReviews(AuthenticatedMixin, ListAPIView):
    # queryset = UserReviews.objects.all()
    serializer_class = UserReviewModSerializer

    def get_queryset(self):
        user = self.request.user
        return UserReviews.objects.filter(user=user)

    def list(self, request, *args, **kwargs):
        user = request.user
        user_reviews = self.get_queryset()
        serializer = self.get_serializer(user_reviews, many=True)
        return Response({'data': serializer.data},
                        status=status.HTTP_200_OK)


class MovieReviewViews(AuthenticatedMixin, CreateAPIView):
    queryset = UserReviews.objects.all()
    serializer_class = MovieReviewSerializer

    def create(self, request, *args, **kwargs):
        """ create a rating for a movie """
        movie_id = request.data.get("movie", None)
        movie_name = Movie.objects.filter(id=movie_id).first() # get movie data
        if movie_name is None:
            return Response({'data': "Movie does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        # check if user already reviewed movie
        user_review = User.objects.filter(id=request.data.get(
            'user')).first().my_reviews
        if user_review:
            return Response({'data': 'You have already reviewed this movie'}, status=status.HTTP_400_BAD_REQUEST)
        if movie_name:
            serializer = self.get_serializer(data=request.data)
            try:
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response({'data': 'Successfully reviewed'},
                                status=status.HTTP_201_CREATED)
            except serializers.ValidationError as e:
                return Response({'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'data': 'No movie with ID'}, status=status.HTTP_400_BAD_REQUEST)


