from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'/api/v1/profiles', views.ProfileViewSet)

urlpatterns = [
    url('^$', views.test),
    path('jhomarTest', views.test2),
    path('api/v1/profiles', views.ProfileViewSet.as_view({'get': 'list'}))
]