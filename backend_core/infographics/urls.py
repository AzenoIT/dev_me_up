from django.urls import path

from . import views

app_name = 'infographics'

urlpatterns = [
    path('infographics/', views.InfographicAPIView.as_view(), name='Infographic'),
]
