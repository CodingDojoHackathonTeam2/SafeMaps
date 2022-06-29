from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'/api/v1/profiles', views.ProfileViewSet)

urlpatterns = [
    url('^$', views.index),
    path('jhomarTest', views.test2),
    path('api/v1/profiles', views.ProfileViewSet.as_view({'get': 'list'})),
    path('session/check', views.check_login),
    path('no/access', views.need_login),
    path('api/users/login', views.login_view),
    path('api/users/register', views.register),
    path('api/users/create/profile', views.set_profile),
    path('api/users/logout', views.logout_user),
    path('api/csrf/', views.get_csrf, name='api-csrf'),
    path('api/session/', views.SessionView.as_view(), name='api-session'),
    path('api/whoami/', views.WhoAmIView.as_view(), name='api-whoami'),
    # path('api/announcements/all', views.AnnouncementsViewSet.as_view({'get': 'list'})),
    path('api/announcements/all', views.get_announcements),
    path('api/announcements/create', views.create_announcement),
]