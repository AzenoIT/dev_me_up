from django.urls import path

from . import views

app_name = 'technologies'

urlpatterns = [
    path('technologies/', views.TechnologyListView.as_view(), name='list_technologies'),
]
