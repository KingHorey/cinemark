from django.db import models

from uuid import uuid4

from movie.models import  Movie, Series, Episode
from user.models import User


# Create your models here.
class SavedMovies(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    movies = models.ManyToManyField(Movie, blank=True, related_name='my_movies')
    series = models.ManyToManyField(Series, blank=True, related_name='my_series')
    episodes = models.ManyToManyField(Episode, blank=True, related_name='my_episodes')
    last_updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_saved_items", db_index=True)

    def __str__(self):
        return f"saved items for {self.user.first_name} with {self.id}"


class UserPreferences(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    user = models.OneToOneField('user.User', related_name='user_preferences',
                             on_delete=models.CASCADE)
    genre = models.ManyToManyField('movie.Genre',
                                  related_name='user_preferred_genres')

    def __str__(self):
        genres = [genre.name for genre in self.genre.all()]
        return f"{self.user.email} has {len(genres)} preferred genres"


class UserReviews(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    content = models.TextField()
    movie = models.ForeignKey(Movie, related_name="reviews", on_delete=models.CASCADE)
    rating = models.DecimalField(decimal_places=1, null=False, max_digits=2)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE, related_name="my_reviews")


    def __str__(self):
        return f"{self.user.first_name} rated {self.rating} stars"
