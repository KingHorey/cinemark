from rest_framework import serializers

from .models import Movie, Genre, Season, Series, Episode


class GenreSerializer(serializers.RelatedField):
    def to_internal_value(self, data):
        if isinstance(data, dict):
            name = data.get('name')
            id = data.get('id')
            if id and name:
                return Genre.objects.get_or_create(id=id, defaults={
                    'name': name
                })
            else:
                raise serializers.ValidationError("id and name not provided")

    def to_representation(self, value):
        return {"id": value.id, "name": value.name}


class MovieSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True, queryset=Genre.objects.all())
    # genres = serializers.SerializerMet
    # hodField()
    # genre = serializers.PrimaryKeyRelatedField(many=True, read_only=False, queryset=Genre.objects.all())

    class Meta:
        model = Movie
        fields = "__all__"

    def create(self, validated_data):
        genres = validated_data.pop('genre', [])
        movie_instance = Movie.objects.create(**validated_data)
        for genre_data in genres:
            # print('data:', genre_data)
            # genre, created = Genre.objects.get_or_create(
            #     id=genre_data.get('id'), defaults = {'name':genre_data.get(
            #         'name')})
            movie_instance.genre.add(genre_data[0].id)
        return movie_instance

    # @staticmethod
    # def get_genre(instance):
    #     return [{'id':name.id, 'name': name.name} for name in
    #             instance.genre.all()]

    @staticmethod
    def save_genres(genres):
        pass



class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ["id", "title", "overview", "runtime", "episode_number",
                  "image", 'key', 'site', 'casts', 'director']


class SeasonSerializer(serializers.ModelSerializer):
    # episodes = EpisodeSerializer(many=True)
    class Meta:
        model = Season
        fields = ["id", "air_date", "overview", "name", "json_episodes"]

    def create(self, validated_data):
        series_id = self.context['series_id']
        if not series_id:
            raise serializers.ValidationError(
                {"series_id": "This field is required."})
        try:
            series_instance = Series.objects.get(id=series_id)
            season_instance = Season.objects.get_or_create(
                series=series_instance, **validated_data)
            season_instance.series = series_instance
            return season_instance
        except Series.DoesNotExist as e:
            raise serializers.ValidationError({"series_id": "Invalid series ID."})


class SeriesSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True, queryset=Genre.objects.all())
    # seasons = SeasonSerializer(many=True, )
    class Meta:
        model = Series
        fields = "__all__"

    def create(self, validated_data):
        print("==> ", validated_data)
        seasons = validated_data.pop('seasons', [])
        genres = validated_data.pop('genre', [])
        id  = validated_data.pop('id', None)
        series_instance, _ = Series.objects.get_or_create(id=id,
                                                 defaults=validated_data)
        for genre in genres:
            series_instance.genre.add(genre[0].id)
        return series_instance

        # if id:
        #     series_instance, _ = Series.objects.get_or_create(
        #     id=id, defaults=validated_data)
        # # time to handle seasons
        #     created_seasons = []
        #     if seasons:
        #         for season in seasons:
        #             season['series'] = series_instance
        #             season_episodes = season.pop('episodes', None)
        #             season_instance, _ = Season.objects.get_or_create(
        #                 id=season.get('id'), defaults=season) # get or create
        #             for episode in season_episodes:
        #                 episode['season'] = season_instance
        #                 episode_instance, _ = Episode.objects.get_or_create(
        #                     id=episode.get('id'), defaults=episode) # get or
        #                 # create episode
        #         for genre_data in genre:
        #             series_instance.genre.add(genre_data[0].id)
        #         return series_instance
