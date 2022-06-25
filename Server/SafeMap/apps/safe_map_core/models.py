from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=50)
    phone_mobile = models.CharField(max_length=20, blank=True, null=True)
    phone_secondary = models.CharField(max_length=20, blank=True, null=True)
    address_street1 = models.CharField(max_length=250, blank=True, null=True)
    address_street2 = models.CharField(max_length=250, blank=True, null=True)
    address_street3 = models.CharField(max_length=250, blank=True, null=True)
    address_city = models.CharField(max_length=250, blank=True, null=True)
    address_postal = models.CharField(max_length=20, blank=True, null=True)
    address_state = models.CharField(max_length=50, blank=True, null=True)
    address_country = models.CharField(max_length=50, blank=True, null=True)
    stripe_lookup = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def in_group(self, group_name):
        if group_name in self.user.groups.all():
            return True
        else:
            return False

    def __str__(self):
        return self.full_name
