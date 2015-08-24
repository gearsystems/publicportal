
import json
import requests
from requests_oauthlib import OAuth1

api_key = "<api_key>"
api_secret = "<api_secret>"
access_token_key = "<access_token_key>"
access_token_secret = "<access_token_secret>"




def sendmessage(user, msg, to_reply_id):
	url = "https://api.twitter.com/1.1/statuses/update.json?status="
	msg = "%40"+user+" "+ msg + "&in_reply_to_status_id="
	end_url =  url+msg+to_reply_id
	end_url = end_url.encode('utf-8')
	auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
	r = requests.post(end_url, auth=auth)
	# print r.content

