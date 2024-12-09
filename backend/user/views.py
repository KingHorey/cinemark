from django.shortcuts import render
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, \
    RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework_simplejwt.tokens import Token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .models import User
from .serializers import RegisterUserSerializer, LoginViewSerializer, \
    UserInformationUpdateSerializer


# Create your views here.

class RegisterUserView(CreateAPIView):
    serializer_class = RegisterUserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        request_data = request.data
        confirm_password = request_data.pop("confirm_password", None)
        print("This is the received data: ", request_data)
        serializer = self.get_serializer(data=request_data)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response({'data': serializer.data},
                            status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response({'data': serializer.errors},
                        status=status.HTTP_400_BAD_REQUEST)


class LoginView(TokenObtainPairView):
    serializer_class = LoginViewSerializer


class RefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        print("----- Token Refresh Debug -----")
        print(f"Request Data: {request.data}")
        print(f"Headers: {request.headers}")
        return super().post(request, *args, **kwargs)


class UpdateUserInformationView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserInformationUpdateSerializer
    lookup_field = 'id'
    queryset = User.objects.all()
    # permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        user_id = kwargs.get('id', None)
        try:
            if user_id:
                user = self.queryset.filter(id=user_id).first()
            # remove the user email if there is no change
            serializer = self.get_serializer(user, data=request.data,
                                              partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save() # calls the update in the serializer
                return Response({'data': serializer.data}, status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            print(serializer.errors)
            return Response({'data': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



