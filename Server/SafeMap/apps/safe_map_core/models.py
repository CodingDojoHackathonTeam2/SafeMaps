from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator


class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile',primary_key=True)
    coordinates=models.CharField(max_length=255)
    address = models.CharField(max_length=255)

    def __str__(self):
        return f'[MODELS] Profile | name: {self.user.first_name} '


class Announcements(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    name=models.CharField(max_length=255)
    country=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    coordinates = models.CharField(max_length=255)
    people_capacity=models.IntegerField(validators=[MinValueValidator(0)])
    lodging_time=models.IntegerField(validators=[MinValueValidator(0)])
    # Identificar la autenticidad del usuario
    identity=models.BooleanField(default=False)
    # ==================================
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return f'[MODELS] Announcement | name: {self.name}'

class Languages(models.Model):
    pass # enum?
    # many to one connected to Announcements

class Extras(models.Model):
    pass #connected to Announcements


