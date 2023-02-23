from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path('users/', views.CreateUserAPIView.as_view(), name='create_user'),
    path('users/<int:pk>', views.GetUserAPIView.as_view(), name='get_user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/<int:pk>/', views.UserUpdateAPIView.as_view(), name='update_user'),
    path('userfriends/', views.UserFriendListAPIView.as_view(), name='userfriends'),
    path('userfriends_add/', views.UserFriendAddAPIView.as_view(), name='userfriends_add')
]
