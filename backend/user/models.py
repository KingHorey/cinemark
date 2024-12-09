from django.db import models

from django.contrib.auth.models import UserManager, AbstractUser, PermissionsMixin

from uuid import uuid4


class CustomUserManager(UserManager):

    def _prefill_user(self, email=None, password=None, **fields):
        if email is None:
            raise ValueError("An Email address needs to be provided")
        user = self.model(email=email, **fields)
        if password is None:
            print("There is no password: ", password)
            user.set_unusable_password()
        else:
            print("There is a password", password)
            user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_admin', False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)
        print("Received password", password)
        user = self._prefill_user(email, password, **extra_fields)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_admin', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)
        user = self._prefill_user(email, password, **extra_fields)
        return user


class User(AbstractUser, PermissionsMixin):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    first_name = models.CharField(max_length=30, null=False, blank=False)
    last_name = models.CharField(max_length=30, null=False, blank=False)
    email = models.EmailField(unique=True)
    liked_videos = models.ManyToManyField('movie.Movie',
                                          related_name="my_liked_movies")
    disliked_videos = models.ManyToManyField('movie.Movie',
                                             related_name="my_disliked_videos")
    username = None
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    _image = models.ImageField(upload_to='images/', null=True, blank=True)

    @property
    def image(self):
        return f"/media/{self._image}"


    @image.setter
    def imagec(self, value):
        self._image = value

    def __str__(self):
        """ returns the unofficial str representation"""
        return f"{self.first_name} {self.last_name} - {self.email}"

    objects = CustomUserManager()

    class Meta:
        verbose_name = "user"
        verbose_name_plural = 'users'

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
