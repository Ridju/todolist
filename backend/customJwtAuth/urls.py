from django.urls import path
from .views import CookieTokenRefreshView, CookieTokenObtainPairView, logoutView, CreateUserView

urlpatterns = [
    path('login/', CookieTokenObtainPairView.as_view(), name='login'),
    path('refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', logoutView, name='logout'),
    path('register/', CreateUserView.as_view(), name="register_user"),
]