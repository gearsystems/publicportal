from django.contrib import admin
# Register your models here.
from authentication.models import UserProfile
admin.site.register(UserProfile)