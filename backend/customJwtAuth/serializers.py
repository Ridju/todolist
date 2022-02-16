from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObteinPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # print(repr(user))
        token['username'] = user.username

        return token
