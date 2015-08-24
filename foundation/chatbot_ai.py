#This is where the file is
from foundation.models import Mapobject,Complaint,IncompleteComplaint
from django.contrib.auth.models import User,AnonymousUser
import nlpshit
# from publicportal import settings
# from django.core.management import setup_environ
# setup_environ(settings)


states_strs = ["title", "description", "type", "location", "latlong", "success"]


def update(stateslist,column):
	i = states_strs.index(column)
	s_l = list(stateslist)
	print s_l
	s_l[i] = '1'
	stateslist = "".join(s_l)
	return stateslist

def nlp_complaint(message, stateslist):
	complaint=IncompleteComplaint()
	loc, com = nlpshit.parse(message)
	if (len(loc) != 0):
		stateslist = update(stateslist,"location")
		complaint.location=loc
	if (len(com) != 0):
		stateslist = update(stateslist,"title")
		complaint.title=com
	complaint.save()
	zero_index=stateslist.find('0')
	return zero_index+1,stateslist,complaint.id

def hello():
	print "HEllo working"

def getdesp(rec_msg,new_msg,state,mode,complaint_id,stateslist):
	if mode%2 == 0:
		return "Please type the description of the problem",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		complaint.description=rec_msg
		complaint.save()
		# update()
		return "Thank you for the description",state+1,mode+1

def getlatlong(rec_msg,new_msg,state,mode,complaint_id,stateslist):
	if mode%2 == 0:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		return "Select the place from the map",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		print rec_msg
		rec_msg=rec_msg.split(',')
		complaint.latitude=rec_msg[0]
		complaint.longitude=rec_msg[1]
		complaint.save()
		return "Thank you for the lat long",state+1,mode+1


def getpicture(rec_msg,new_msg,state,mode,complaint_id,stateslist):
	if mode%2 == 0:
		return "Give picture of the problem if any.....",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		complaint.image=rec_msg
		complaint.save()
		return "Thank you for the picture",state+1,mode+1

def getlocation(rec_msg,new_msg,state,mode,complaint_id,stateslist):
	if mode%2 == 0:
		return "Give the location of your problem",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		complaint.location=rec_msg
		complaint.save()
		return "Thank you for the location",state+1,mode+1

def gettype(rec_msg,new_msg,state,mode,complaint_id,stateslist):
	if mode%2 == 0:
		return "Give us a type from the following list[MC: Municipality, SB:SwachhBharat]",state,mode+1
	else:
		complaint=IncompleteComplaint.objects.get(id=complaint_id)
		complaint.type=rec_msg
		complaint.save()
		return "Thank you for the type",state+1,mode+1

def level0(rec_msg,new_msg,state,mode,statelist,complaint_id):
	if mode%2 == 0:
		return "What is your problem?",state,mode+1,complaint_id,statelist
	else:
		state,statelist,complaint_id=nlp_complaint(rec_msg,statelist)
		print state,statelist, complaint_id
		return "Thank you for the for the complaint",state,mode+1,complaint_id,statelist
def getsuccess(rec_msg,new_msg,state,mode,complaint_id,statelist):
	return "complaint has been lodged. here is your refererral: "+str(complaint_id),state,mode


def chatanswer(rec_msg,new_msg,state,mode,complaint_id,statelist):
	print state, statelist,"ahdkjasdkjasdgjaskgdajhdgasjh"
	msg=""
	
	if state == -1:
		print "Entered level0"
		msg,state,mode,complaint_id,statelist=level0(rec_msg,new_msg,state,mode,statelist,complaint_id)
		new_msg=new_msg+". "+msg
	# print "the state is "
	# print 'updated state'
	if state == 2 and statelist[state-1] == '0':
		print "Entered state 2....description"
		msg,state,mode=getdesp(rec_msg,new_msg,state,mode,complaint_id,statelist)
		new_msg=new_msg+". "+msg
	elif statelist[state-1] == '1':
		state=state+1	
	if state == 3 and statelist[state-1] == '0':
		print "Entered state 3.....Type"
		msg,state,mode=gettype(rec_msg,new_msg,state,mode,complaint_id,statelist)
		new_msg=new_msg+". "+msg
	elif statelist[state-1] == '1':
		state=state+1
	if state == 4 and statelist[state-1] == '0':
		print "Entered state 4....location"
		msg,state,mode=getlocation(rec_msg,new_msg,state,mode,complaint_id,statelist)
		new_msg=new_msg+". "+msg
	elif statelist[state-1] == '1':
		state=state+1
	if state == 5 and statelist[state-1] == '0':
		print "Entered state 5....Lat Long"
		msg,state,mode=getlatlong(rec_msg,new_msg,state,mode,complaint_id,statelist)
		new_msg=new_msg+". "+msg
	elif statelist[state-1] == '1':
		state=state+1
	if state == 6 and statelist[state-1] == '0':
		print "Entered state 6....Success"
		msg,state,mode=getsuccess(rec_msg,new_msg,state,mode,complaint_id,statelist)
		new_msg=new_msg+". "+msg
	elif statelist[state-1] == '1':
		state=state+1
	return new_msg,state,mode,statelist,complaint_id
	# if state == 3:
	# 	print "Entered state 3"
	# 	msg,state,mode=getpic(new_msg,state,mode)
	# 	new_msg=new_msg+msg



# nlp_complaint("Broken road at NIT Warangal", "000000")

