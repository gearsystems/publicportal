import json
import requests
from requests_oauthlib import OAuth1
from twitterconstants import *

api_key = API_KEY
api_secret = API_SECRET
access_token_key = ACCESS_TOKEN_KEY
access_token_secret = ACCESS_TOKEN_SECRET

def sendmessage(user, msg, to_reply_id):
	url = "https://api.twitter.com/1.1/statuses/update.json?status="
	msg = "%40"+user+" "+ msg + "&in_reply_to_status_id="
	end_url =  url+msg+to_reply_id
	end_url = end_url.encode('utf-8')
	auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
	r = requests.post(end_url, auth=auth)

