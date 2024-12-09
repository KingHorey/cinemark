from django.contrib import admin

# Register your models here.
from .models import UserReviews, UserPreferences

admin.site.register(UserReviews)
admin.site.register(UserPreferences)