from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.
from django.utils import timezone
from django.http import HttpResponse
from django.template import RequestContext, loader
from foundation.models import *

def index(request):
	return render(request, 'administration/index.djt')