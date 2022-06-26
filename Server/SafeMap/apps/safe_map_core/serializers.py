from rest_framework import serializers
from .models import *

class  ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'id',
            'user',
            'full_name',
            'phone_mobile'
        )
        model = Profile