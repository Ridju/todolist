from django.http import HttpResponseRedirect, HttpResponse
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.exceptions import InvalidToken
from .serializers import MyTokenObteinPairSerializer

from backend import settings


class CookieTokenRefreshSerializer(TokenRefreshSerializer):
    refresh = None

    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get('refresh_token')
        if attrs['refresh']:
            return super().validate(attrs)
        else:
            raise InvalidToken('No valid token found in cookie \'refresh_token\'')


class CookieTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObteinPairSerializer

    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 1  # 14 days
            response.set_cookie('refresh_token',
                                response.data['refresh'],
                                max_age=cookie_max_age,
                                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'])
            del response.data['refresh']
        return super().finalize_response(request, response, *args, **kwargs)


class CookieTokenRefreshView(TokenRefreshView):
    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get('refresh'):
            cookie_max_age = 3600 * 24 * 1  # 14 days
            response.set_cookie('refresh_token',
                                response.data['refresh'],
                                max_age=cookie_max_age,
                                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'])
            del response.data['refresh']
        return super().finalize_response(request, response, *args, **kwargs)

    serializer_class = CookieTokenRefreshSerializer


def logoutView(request):
    response = HttpResponse('')
    response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'])
    return response
