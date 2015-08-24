from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.http import Http404,HttpResponseRedirect,HttpResponse
from foundation.models import Mapobject,Complaint,IncompleteComplaint
from django.contrib import messages
from django.contrib.auth.models import User,AnonymousUser
import json
import nude
from foundation.chatbot_ai import *

# Create your views here.
def render_to_json(request, data):
    return HttpResponse(
        json.dumps(data, ensure_ascii=False),
        mimetype=request.is_ajax() and "application/json" or "text/html"
    )

def change_file_path(comp):
	import os
	from django.conf import settings
	initial_path = comp.image.path
	comp.image.name = '/needsapproval'+ initial_path[initial_path.rindex('/'):]
	new_path = settings.MEDIA_ROOT + comp.image.name
	dir = os.path.dirname(new_path)

	try:
		os.stat(dir)
	except:
		os.mkdir(dir) 
	os.rename(initial_path, new_path)
	comp.save()

def complain(request):
	if request.method=="POST":
		title=request.POST.get('title',"")
		complaintype=request.POST.get('complaintype',"")
		description = request.POST.get('description',"")
		difficulty=request.POST.get('difficulty',"")
		lat = request.POST.get('lat',"")
		lon = request.POST.get('lon',"")
		loc = request.POST.get('loc',"")
		anonycheck=request.POST.get('anonycheck',"")
		comp=Complaint()
		# if 'picture' in request.FILES:
		comp.image = request.FILES['picture']
		print comp.image
		comp.title=title
		comp.type=complaintype
		comp.description=description
		comp.difficulty=difficulty
		comp.latitude=lat
		comp.longitude=lon
		comp.location= loc
		if not anonycheck:
			comp.userid=request.user.id
		else:
			comp.userid=0
		comp.save()
		#Using the nonude library to check and store it under needsapproval if necessary
		isnude = nude.is_nude(comp.image.path)
		if isnude == True:
			comp.approved = False;
			change_file_path(comp)
			messages.error(request,"Complaint image may have contained nudity. Approval awaiting.")
		else:
			messages.info(request,"Complaint has been registered!")
		return HttpResponseRedirect('/complain/')
	return render(request,'user/complaint.djt',{'title':'Complain'})

def viewcomplaints(request):
	complains=Complaint.objects.filter(approved = True)
	return render(request,'user/viewcomplaints.djt',{'title':'View Complaints','complains':complains})

def chatbot(request):
	return render(request,'chatbot/chat.djt',{'title':'Chat Bot'})

@csrf_protect
def livechatbot(request):
	new_msg='Checking'
	response_data = {}
	if request.method == 'POST':
		new_msg=""
		rec_msg=request.POST.get('content')
		state=int(request.POST.get('state_flag'))
		mode=int(request.POST.get('mode'))
		state_list=request.POST.get('state_list')
		complaint_id=int(request.POST.get('complaint_id'))
		msg_content=rec_msg
		print msg_content
		print state_list
		hello()
		new_msg,state,mode,state_list,complaint_id=chatanswer(rec_msg,new_msg,state,mode,complaint_id,state_list)
		response_data['message'] = new_msg
		response_data['uid'] = 0
		response_data['state']=state
		response_data['mode']=mode
		response_data['complaint_id']=complaint_id
		response_data['statelist']=state_list
	return HttpResponse(json.dumps(response_data), content_type="application/json")


def maparea2(request,address):
	return render(request, 'try2.djt',{'addr':address})

def retlocation(request):
	if request.method == 'POST':
		complaint_id=int(request.POST.get('complaint_id'))
		c=IncompleteComplaint.objects.get(id=complaint_id)
		response_data={}
		response_data['location']=c.location
	return HttpResponse(json.dumps(response_data),content_type="application/json")
def maparea(request,p_t_id,address):
	return render(request, 'try.djt',{'addr':address,'id': p_t_id})
