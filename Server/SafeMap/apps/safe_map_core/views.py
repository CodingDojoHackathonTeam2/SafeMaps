from django.shortcuts import render, HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import *
from .serializers import *
from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework import viewsets
from rest_framework import permissions

from django.http import JsonResponse

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
    username = request.POST.get("username")
    password = request.POST.get("password")
    print(username, password)
    print(request)
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        print("logged in?")
        return JsonResponse({"signed_in": True})
    else:
        print("or not?")
        return JsonResponse({"signed_in": False}, status=401)
