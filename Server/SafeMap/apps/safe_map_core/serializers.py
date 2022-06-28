from rest_framework import serializers
from .models import *

class  ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user',
            'coordinates',
            'address'
        )
        model = Profile

class  AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'country',
            'address',
            'coordinates',
            'people_capacity',
            'lodging_time',
            'created_at',
            'updated_at'
        )
        model = Announcements

class ExtrasSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'pet',
            'legal_assistance',
            'kid_friendly',
            'emergency_medical_assistance',
            'transportation',
            'childcare_support',
            'first_aid',
            'created_at',
            'updated_at'
        )