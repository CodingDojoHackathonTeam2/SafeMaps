from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework import permissions
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
import json
from pprint import pprint
from .ext_apis import MapBox_Connector

from django.http import JsonResponse


# convert request body to JSON
def get_json(request):
    try:
        request_body = json.loads(request.body)
        return request_body
    except:
        return {}

def wrap_response(request, json):
    response = JsonResponse(json)
    if request.user.is_authenticated:
        response.set_cookie(
            "iShelterUserId",
            value=request.user.id,
            max_age=7200
        )
        response.set_cookie(
            "iShelterUsername",
            value=request.user.username,
            max_age=7200
        )
    else:
        response.set_cookie(
            "iShelter",
            value="Not logged in",
            max_age=1800
        )
    return response


# Create your views here.
def get_csrf(request):
    response = wrap_response(request,{
        'detail': 'CSRF cookie set',
        'CSRFToken': get_token(request)
    })
    # response['X-CSRFToken'] = get_token(request)
    return response

@login_required(login_url='/no/access')
def test(request):
    return HttpResponse("How are you?")

@login_required(login_url='/no/access')
def test2(request):
    peru = "Jr. Libertad 657, Moyobamba 22001, Perú"
    sf = "1 Market St. San Francisco CA 94105"
    coordinates = \
    MapBox_Connector.get_coordinates(peru)
    print("peru")
    pprint(coordinates)
    return render(request, 'index.html', context={"c": coordinates})

def need_login(request):
    return wrap_response(request,
        {
            "success": False,
            "error": "You need to be logged in to do that"
        }
    )

def check_login(request):
    if request.user.is_authenticated:
        return wrap_response(request,
            {
                "logged_in": True
            }
        )
    else:
        return wrap_response(request,
            {
                "logged_in": False
            }
        )


def login_view(request):
    username = get_json(request).get("email")
    password = get_json(request).get("password")
    print(username)
    print(password)
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        print("logging in")
        return wrap_response(request,{"signed_in": True})
    else:
        print("couldn't login")
        return wrap_response(request,{"signed_in": False}, status=401)


def register(request):
    print(str(request.body))
    try:
        # Todo add password validation
        form = get_json(request)
        if form == {}:
            print("bad form")
            return wrap_response(request,
                {
                    "success": False,
                    "error": "Could not parse as JSON",
                    "request_body": str(request.body)
                }
            )
        print(form)
        user = User.objects.create_user(
            username=form.get("email"),
            password=form.get("password"),
            email=form.get("email"),
            first_name=form.get("firstname"),
            last_name=form.get("lastname")
        )
        coordinates = MapBox_Connector.get_coordinates(form.get("address"))
        profile = Profile.objects.create(
            user=user,
            coordinates=coordinates,
            address=form.get("address")
        )
        user.save()
        profile.save()
        # print(user.username)
        login(request, user)
        return wrap_response(request,
            {
                "signed_in": True,
                "create": True
            }
        )
    except Exception as e:
        wrap_response(request,
            {
                "signed_in": False,
                "create": False,
                "error": e
            }
        )

# No longer used
def set_profile(request):
    try:
        form = get_json(request)
        if form == {}:
            wrap_response(request,
                {
                    "success": False,
                    "error": "Could not parse as JSON",
                    "request_body": request.read()
                }
            )
        user = request.user
        address = form.get('address')
        try:
            coordinates = MapBox_Connector.get_coordinates(address)
        except:
            return wrap_response(request,{
                "success": False,
                "error": "Could not find Address"
            })
        Profile.objects.create(
            user=user,
            address=address,
            coordinates=coordinates,
        )
        return wrap_response(request,{"success": True})
    except Exception as e:
        return wrap_response(request,{
            "success": False,
            "error": str(e)
        })


def logout_user(request):
    logout(request)
    return wrap_response(request,
        {
            "signed_out": True
        }
    )

@login_required(login_url='/no/access')
def create_announcement(request):
    if request.method != "POST":
        return redirect("api/announcements/all")
    else:
        form = get_json(request)
        if form == {}:
            return wrap_response(request,
                {
                    "success": False,
                    "error": "Bad JSON"
                }
            )
        try:
            profile = request.user.profile
            languages = ""
            if form.get("english_speaker"):
                languages += "English, "
            if form.get("ukranian_speaker"):
                languages += "Ukrainian, "
            if form.get("russian_speaker"):
                languages += "Russian, "
            if len(languages) > 0:
                languages = languages[:-2]
            else:
                languages = "None specified"
            coordinates = MapBox_Connector.get_coordinates(form.get('address'))
            announcement=Announcements.objects.create(
                name=form.get('name'),
                country=form.get('country'),
                address=form.get('address'),
                people_capacity=form.get('people_capacity'),
                lodging_time=form.get('lodging_time'),
                languages=languages,
                coordinates=coordinates,
                profile=profile,
                pets=form.get('pets'),
                legal_assistance=form.get('legal_assistance'),
                kid_friendly=form.get('kid_friendly'),
                transportation=form.get('transportation'),
                childcare_support=form.get('childcare_support'),
                first_aid=form.get('first_aid'),
            )
            return wrap_response(request,
                {
                    "success": True,
                    "announcementId": announcement.id
                }
            )
        except Exception as e:
            return wrap_response(request,
                {
                    "success": False,
                    "error": str(e)
                }
            )

def get_announcements(request):
    announcements=Announcements.objects.all()
    response=[]
    for ann in announcements:
        this_ann = {

        }


    return wrap_response(request, response)





class SessionView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(request, format=None):
        return wrap_response(request,{'isAuthenticated': True})


class WhoAmIView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(request, format=None):
        return wrap_response(request,{'username': request.user.username})


class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class AnnouncementsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Announcements.objects.all()
    serializer_class = AnnouncementSerializer
    # permission_classes = [permissions.IsAuthenticated]