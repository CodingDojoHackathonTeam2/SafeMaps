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


class Extras(models.Model):
    pets = models.BooleanField(null=True, blank=True, default=False)
    legal_assistance= models.BooleanField(null=True, blank=True, default=False)
    kid_friendly = models.BooleanField(null=True, blank=True, default=False)
    emergency_medical_assistance=models.BooleanField(null=True, blank=True, default=False)
    transportation =models.BooleanField(null=True, blank=True, default=False)
    childcare_support= models.BooleanField(null=True, blank=True, default=False)
    first_aid = models.BooleanField(null=True, blank=True, default=False)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return f'[MODELS] Extras | created_at: {self.created_at}'


class Announcements(models.Model):
    name=models.CharField(max_length=255)
    country=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    coordinates = models.CharField(max_length=255)
    people_capacity=models.IntegerField(validators=[MinValueValidator(0)])
    lodging_time=models.IntegerField(validators=[MinValueValidator(0)])


    # OneToMany with Profile
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)

    # ManyToOne with Extras
    extras = models.ForeignKey(Extras, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return f'[MODELS] Announcement | name: {self.name}'

