from django.contrib import admin

from .models import Movie, Genre, Season, Series, Episode
# Register your models here.
admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Season)
admin.site.register(Series)
admin.site.register(Episode)