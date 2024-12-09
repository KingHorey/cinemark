from django.urls import path
from .views import MovieReviewViews, UpdateDestroyMyReview, AllUserReviews, \
    UserPreferencesView

urlpatterns = [
    path("review/create/", MovieReviewViews.as_view(), name="create review"),
    path("review/actions/<uuid:id>", UpdateDestroyMyReview.as_view(),
         name="work on a review"),
    path("review/all-my-reviews/", AllUserReviews.as_view(), name="My "
                                                                  "Reviews"),
    path("preferences/", UserPreferencesView.as_view(), name="My video "
                                                             "preferences")

]