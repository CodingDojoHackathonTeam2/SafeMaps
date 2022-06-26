from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator

#todo refactor user object
#todo relatinship fields
#todo figure method

# Create your models here.
# Change Users to -> User
class Users(models.Model):
    firstname=models.CharField(max_length=255)
    lastname=models.CharField(max_length=255)
    email=models.EmailField(max_length=255)
    password= models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return f"[MODELS] User | name: {self.firstname}, email: {self.email}"


class Profile(models.Model):
    user=models.OneToOneField(Users, on_delete=models.CASCADE, related_name='profile',primary_key=True)

    def __str__(self):
        return f'[MODELS] Profile | name: {self.user.nombre} '

# RELATIONS
# many to many
# many to one

class Announcements(models.Model):
    name=models.CharField(max_length=255)
    country=models.CharField(max_length=255)
    city=models.CharField(max_length=255)
    people_capacity=models.IntegerField(validators=[MinValueValidator(0)])
    lodging_time=models.IntegerField(validators=[MinValueValidator(0)])
    # Identificar la autenticidad del usuario
    identity=models.BooleanField(default=False)
    child_friendly = models.BooleanField(default=False)
    pet_friendly = models.BooleanField(default=False)
    #todo languages one to many
    # ==================================
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    #todo coordinates for map box

    def __str__(self):
        return f'[MODELS] Announcement | name: {self.name}'

class Languages(models.Model):
    pass
    #todo add field

