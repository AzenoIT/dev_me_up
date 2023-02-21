from django.urls import path

from . import views

urlpatterns = [
    path('technologies/', views.TechnologyListView.as_view(), name='list_technologies'),

]
