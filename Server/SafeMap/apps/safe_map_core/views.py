from django.shortcuts import render, HttpResponse
from .models import *
from .serializers import *
from rest_framework.generics import ListAPIView,CreateAPIView
from rest_framework import viewsets
from rest_framework import permissions

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