from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

from user.views import RegisterUserView, LoginView, UpdateUserInformationView, RefreshView

urlpatterns = [
    path("user/register/", RegisterUserView.as_view(), name="Register User"),
    path("user/token/", LoginView.as_view(), name="Login User"),
    path("user/token/refresh/", RefreshView.as_view(), name="Refresh "
                                                                "token"),
    path("user/update-information/<uuid:id>/",
         UpdateUserInformationView.as_view(), name="Update User Information" ),
    path("user/information/<uuid:id>", UpdateUserInformationView.as_view(),
         name="Get User Information"),
    # path("")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)