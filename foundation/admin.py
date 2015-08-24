from django.contrib import admin
from foundation.models import Mapobject,Complaint,IncompleteComplaint,Tweet
# Register your models here.
admin.site.register(Mapobject)
admin.site.register(Complaint)
admin.site.register(IncompleteComplaint)
admin.site.register(Tweet)