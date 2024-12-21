from django.db import models

# Create your models here.

class Listing(models.Model):
    id  = models.IntegerField(unique=True, primary_key=True)
    overview = models.TextField(null=True, blank=True)
    release_date = models.DateField(null=True)
    vote_count = models.IntegerField(default=0)
    adult = models.BooleanField(default=False)
    language = models.JSONField()
    poster_path = models.URLField(null=True, blank=True)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    banner = models.URLField(null=True, blank=True)
    casts = models.JSONField(null=True)
    director = models.JSONField(null=True)
    key = models.CharField(max_length=250, default='', null=True, blank=True)
    site = models.CharField(max_length=30, default='', null=True, blank=True)


    # def __str__(self):
    #     return self.title

    class Meta:
        abstract = True


class Movie(Listing):
    original_title = models.CharField(max_length=300, unique=True)
    genre = models.ManyToManyField('Genre', related_name='genres')

    def __str__(self):
        return self.original_title

    class Meta:
        verbose_name = "movie"
        verbose_name_plural = "movies"


class Genre(models.Model):
    id = models.IntegerField(unique=True, primary_key=True, )
    name = models.CharField(max_length=30, unique=True)

    class Meta:
        verbose_name = "genre"
        verbose_name_plural = "genres"

    def __str__(self):
        return self.name


class Series(Listing):
    original_name = models.CharField(max_length=300, unique=True)
    genre = models.ManyToManyField('Genre', related_name='series_genres')
    number_of_seasons = models.IntegerField(default=0)

    class Meta:
        verbose_name = "series"
        verbose_name_plural = "seriess"

    def __str__(self):
        return self.original_name


class Season(models.Model):
    id = models.IntegerField(null=False, unique=True, primary_key=True)
    season_number = models.IntegerField(default=1, null=False, blank=False)
    name = models.CharField(max_length=25)
    image = models.URLField(null=True)
    series = models.ForeignKey(Series, related_name='seasons', on_delete=models.CASCADE)
    air_date = models.DateField(null=True)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    overview = models.TextField(null=True, blank=True)
    casts = models.JSONField(null=True)
    director = models.JSONField(null=True)
    key = models.CharField(max_length=250, default='', null=True, blank=True)
    site = models.CharField(max_length=30, default='', null=True, blank=True)
    json_episodes = models.JSONField(null=True, blank=True, default=dict)


    def __str__(self):
        return f"{self.name} for {self.series.original_name}"

    class Meta:
        verbose_name = "season"
        verbose_name_plural = "seasons"


class Episode(models.Model):
    id = models.IntegerField(null=False, unique=True, primary_key=True)
    title = models.CharField(max_length=200)
    image = models.URLField(null=True)
    overview = models.TextField(null=True, blank=True)
    episode_number = models.IntegerField(default=1)
    runtime = models.IntegerField(default=30, null=True, blank=True)
    season = models.ForeignKey(Season, on_delete=models.CASCADE, related_name='episodes')
    overview = models.TextField(null=True, blank=True)
    casts = models.JSONField(null=True)
    director = models.JSONField(null=True)
    key = models.CharField(max_length=250, default='', null=True, blank=True)
    site = models.CharField(max_length=30, default='', null=True, blank=True)
    # optional params
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    def __str__(self):
        return (f"Episode {self.episode_number} - {self.title} for"
                f" {self.season.name} in "
                f"{self.season.series.original_name}")

    class Meta:
        verbose_name = "episode"
        verbose_name_plural = "episodes"
