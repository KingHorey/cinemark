from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from user.models import User
from .models import SavedMovies, UserReviews, UserPreferences

from movie.models import Movie, Season, Episode, Genre

from movie.serializers import GenreSerializer


class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedMovies
        fields = "__all__"


class MovieReactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'rating']

class UserPreferencesSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True, queryset=Genre.objects.all())
    class Meta:
        model = UserPreferences
        fields = ["genre",]

    def create(self, validated_data):
        user = self.context['request'].user
        preferences, created_preferences = (
            UserPreferences.objects.get_or_create(
            user=user))
        genres = validated_data.pop('genre', [])
        if len(genres) > 0:
            for genre_data in genres:
                preferences.genre.add(genre_data[0].id)
        else:
            preferences.genre.set([])
        return preferences

    def to_representation(self, instance):
        data = [{'id': name.id, 'name': name.name} for name in
                instance.genre.all()]
        return {'genre': data}

    # def to_internal_value(self, data):
    #     genres = data.get('genre', None)
    #     if genres:
    #         genre_list = []
    #         for genre in genres:
    #             genre_list.append(genre.get('id'))
    #         print(genre_list)
    #         return {"genre": genre_list}
    #     else:
    #         raise ValidationError("No data to process")




class MovieReviewSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    movie = serializers.PrimaryKeyRelatedField(queryset=Movie.objects.all())
    class Meta:
        model = UserReviews
        fields = "__all__"

    def create(self, validated_data):
        """ create the review """
        instance = UserReviews.objects.create(**validated_data)
        return instance

class UserReviewModSerializer(serializers.ModelSerializer):
    movie = serializers.PrimaryKeyRelatedField(queryset=Movie.objects.all())
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = UserReviews
        fields = ["rating", "content", 'id', 'movie', 'user']

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        movie = instance.movie

        representation['movie'] = {
            'id': movie.id,
            'title': movie.original_title,
        }
        user = instance.user

        representation['user'] = {
            'name': f"{user.first_name} {user.last_name}"
        }

        return representation

class SeasonRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = ["id", 'rating']


class EpisodeRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ["id", 'rating']
