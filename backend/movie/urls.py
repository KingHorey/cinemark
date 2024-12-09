from django.contrib import admin
from django.urls import path
from .views import GetAllMovies, GetMovieInfo, GetAllSeries, GetSeriesInfo

urlpatterns = [
    path("movies/", GetAllMovies.as_view(), name="Get All Movies"),
    path("movies/info/<int:id>/", GetMovieInfo.as_view(), name="Movie Info"),
    path("series/", GetAllSeries.as_view(), name="Get All series"),
    path("series/info/<int:id>/", GetSeriesInfo.as_view(), name="Series Info"),
    # path("movies/search")
]
