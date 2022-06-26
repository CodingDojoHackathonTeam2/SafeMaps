from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'/api/v1/profiles', views.ProfileViewSet)

urlpatterns = [
    url('^$', views.test),
    path('jhomarTest', views.test2),
    path('api/v1/profiles', views.ProfileViewSet.as_view({'get': 'list'})),
    path('session/check', views.check_login),
    path('api/users/login', views.login_view),
    path('api/users/register', views.register),
    path('api/users/logout', views.logout_user),
]