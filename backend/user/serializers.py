from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, \
    AuthUser
from rest_framework_simplejwt.tokens import Token

from .models import User

from io import BytesIO
from PIL import Image
import random
import string
import base64

class RegisterUserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "password"]

    def create(self, validated_data):
        first_name = validated_data.pop('first_name', None)
        last_name = validated_data.pop('last_name', None)
        email = validated_data.pop('email', None)
        password = validated_data.pop('password', None)
        print("Password in serializers: ", password)
        user = User.objects.create_user(first_name=first_name,
                                   last_name=last_name, email=email,
                                   password=password)
        return user


class LoginViewSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: AuthUser) -> Token:
        first_name = user.first_name
        last_name = user.last_name
        email = user.email
        image = user.image
        id = str(user.id)
        token = super().get_token(user)
        token['first_name'] = first_name
        token['last_name'] = last_name
        token['email'] = email
        if image:
            token['image'] = image
        else:
            token['image'] = ''
        token['id'] = id
        return token

class UserInformationUpdateSerializer(serializers.ModelSerializer):
    image = serializers.CharField(required=False, allow_null=True,
                                  allow_blank=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'image', 'id']

    def update(self, instance, validated_data):
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        email = validated_data.get('email')
        image = validated_data.get('image', None)
        check_image = image.split("/")[-1]

        user_image = str(instance.image).split("/")[-1]
        if image and check_image != user_image:
            generated_string = ''.join(random.choices(string.ascii_letters,
                                                     k=10))
            image_path = image.split(',')[1]
            image_path = base64.b64decode(image_path)
            image = Image.open(BytesIO(image_path))
            image.thumbnail((500, 500))  # Example: resize to a maximum of 500x500 px
            image_io = BytesIO()
            image.save(image_io, format='WEBP')
            image_io.seek(0)
            image_file = InMemoryUploadedFile(image_io, None,
                                              f'{generated_string}.png',
                                              'image/png', image_io.tell(),
                                              None)
            instance.image = image_file
            # print(image_file)
        instance.first_name = first_name
        instance.last_name = last_name
        instance.email = email
        instance.save()
        return instance
