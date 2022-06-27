from django.shortcuts import render, HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import *
from .serializers import *
from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework import viewsets
from rest_framework import permissions
from django.contrib.auth.models import User
import json

from django.http import JsonResponse

#convert request body to JSON
def get_json(request):
    try:
        request_body = json.loads(request.body)
        return request_body
    except:
        return {}

# Create your views here.
def test(request):
    return HttpResponse("How are you?")

def test2(request):
    return render(request,'index.html')

class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

def check_login(request):
    if request.user.is_authenticated:
        return JsonResponse(
            {
                "logged_in": True
            }
        )
    else:
        return JsonResponse(
            {
                "logged_in": False
            }
        )

def login_view(request):

    username = get_json(request).get("username")
    password = get_json(request).get("password")
    # print(username)
    # print(password)
    # print(dir(request))
    # print(dir(request.META))
    print(request.headers)
    print(request.body)

    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"signed_in": True})
    else:
        return JsonResponse({"signed_in": False}, status=401)

def register(request):
    form = get_json(request)

    try:
        # Todo add password validation
        user = User.objects.create(
            username=form.get("username"),
            password=form.get("password"),
            email=form.get("email"),
            first_name=form.get("first_name"),
            last_name=form.get("last_name")
        )
        login(request, user)
        return JsonResponse(
            {
                "signed_in": True,
                "create": True
            }
        )
    except Exception as e:
        return JsonResponse(
            {
                "signed_in": False,
                "create": False,
                "error": e
            }
        )

def logout_user(request):
    logout(request)
    return JsonResponse(
        {
            "signed_out": True
        }
    )


