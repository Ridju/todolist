from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

class MyTokenObteinPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # print(repr(user))
        token['username'] = user.username

        return token

class CreateUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        UserModel = get_user_model()
        user = UserModel.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )

        return user

    class Meta: 
        model = get_user_model()
        fields = ("id", "username", "password")