# the main file that uses the loklak api and replies automatically
import json, requests,re
from dateutil import parser
import datetime
import time
from tweet import sendmessage
import os, sys
BASE_DIR = os.path.dirname(os.path.realpath(__file__))
# This is so Django knows where to find stuff.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "publicportal.settings")
sys.path.append(os.path.join(BASE_DIR,".."))
# This is so my local_settings.py gets loaded.
os.chdir(BASE_DIR)
# This is so models get loaded.
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

from foundation.models import Mapobject,Complaint,IncompleteComplaint,Tweet
from django.contrib.auth.models import User,AnonymousUser
from foundation.chatbot import *

def update(stateslist,i):
	s_l = list(stateslist)
	s_l[i] = '1'
	stateslist = "".join(s_l)
	return stateslist


def process_image(link,complaint_id):
	images_path = os.path.join(BASE_DIR,"/media")
	os.chdir(images_path)
	r = requests.get(link)
	path = str(complaint_id)+".jpg"
	f = open(path,'w')
	f.write(r.content)
	f.close()


test = []

def parent_id(username, tweet_id):
	"""
	scrapes twitter.com/status to return the tweet_id of the first tweet in that conversation stack
	"""
	r = requests.get("http://www.twitter.com/"+username+"/status/"+tweet_id)
	t  = re.search("data-tweet-id=\".*\"",r.content)
	parent = t.group(0)
	l = parent.split("\"")
	return l[1]




def genreply(tweet_text, user, parent_tweet_id, tweet_id,to_reply,images_list):
	"""
	parses the tweet and generates a reply that needs to be sent back to the user
	"""
	t= Tweet.objects.all().filter(parent_tweet_id = parent_tweet_id)
	if "latlng" in tweet_text and len(t)==0:
		ll = tweet_text.split(",")
		t = Tweet.objects.get(parent_tweet_id = ll[1])
		t.state += 1
		t.mode += 2
		c = IncompleteComplaint.objects.get(id = t.referralid.id)
		c.latitude = ll[2]
		c.longitude = ll[3]
		c.save()
		t.save()
		sendmessage(to_reply,"please send picture if any with a tag Image", t.reply_to_tweetid)
		return ""
	if(len(t) == 0):
		new_msg = ""
		state = -1;
		mode = 1
		complaint_id = -1
		state_list = "0000000"
		new_msg,state,mode,state_list,complaint_id=chatanswer(tweet_text,new_msg,state,mode,complaint_id,state_list,parent_tweet_id)
		c = IncompleteComplaint.objects.get(id = complaint_id)
		t = Tweet(username=user, parent_tweet_id = parent_tweet_id, referralid = c, mode = mode, reply_to_tweetid = parent_tweet_id,state= state, statelist = state_list)
		t.save()
		return new_msg
	else:
		t = t[0]
		if(len(images_list)>0):
			process_image(images_list[0],t.referralid.id)
		new_msg = ""
		new_msg,state,mode,state_list,complaint_id=chatanswer(tweet_text,new_msg,t.state,t.mode,t.referralid.id,t.statelist,parent_tweet_id)
		t.reply_to_tweetid = tweet_id
		t.state = state
		t.mode = mode
		t.statelist = state_list
		if(len(images_list)>0):
			t.statelist = update(t.statelist,5)
		t.save()
		return new_msg






def run():
	"""
	this sets up the server on the machine to periodically poll the loklak server and parse tweets accordingly
	"""
	user = "@makalaaneesh"
	last_retrieved_time = datetime.datetime.utcnow()
	url = "http://loklak.org/api/search.json?q="
	while True:
		time.sleep(10)
		t =last_retrieved_time.strftime("%Y-%m-%d_%H:%M")
		search_term = user+" since:"+t
		r = requests.get(url+search_term)
		while r.status_code != 200:
			r = requests.get(url+search_term)
		tweets = json.loads(r.content)["statuses"]
		if len(tweets) == 0:
			continue
		else:
			last_retrieved_time = parser.parse(tweets[0]["created_at"])
			last_retrieved_time = last_retrieved_time + datetime.timedelta(minutes =1)
			for tweet in tweets:
				if user not in tweet["mentions"]:
					continue
				# print tweet["mentions"]
				to_reply = tweet["screen_name"].encode('utf-8')
				to_reply_id = tweet["id_str"].encode('utf-8')
				parent_tweet_id = parent_id(to_reply,to_reply_id)
				images_list = tweet["images"]
				tweet_text = tweet["text"].encode("utf-8")
				tweet_text = tweet_text[tweet_text.index(" ")+1:]
				msg = genreply(tweet_text, to_reply, parent_tweet_id, to_reply_id,to_reply, images_list)
				if msg != "":
					sendmessage(to_reply,msg, to_reply_id)

run()