
import json
import requests
from requests_oauthlib import OAuth1
# import urllib2
# from twitter import *

api_key = "FzFMBBR2bTlNNWMiE2iXMg2pT"
api_secret = "sZEL4Jv0pCrvv1cevdi4WYybvq5JPypaBWDyusU9tnnIZuCQ4B"
access_token_key = "3013571240-2xEhMAKJnRGNp1uYae8KbjYH7FFkvF832rTatUx"
access_token_secret = "HhCQXfWRcQJp9gbEesz9kjBOytwm4D1WzsgqF7l8svyVk"

msg= "@RishabhKarajgi heloooooooo"


# url = 'https://api.twitter.com/oauth/authorize'
# url="https://stream.twitter.com/1.1/statuses/firehose.json"

proxies = {
	  "http": "http://172.30.0.7:3128",
	  "https": "http://172.30.0.7:3128",
	}

# url = "https://api.twitter.com/1.1/statuses/update.json?status=%40vivekace hi there bro"
# auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
# r = requests.post(url,auth=auth,proxies=proxies)
# print r.content



# t = Twitter(auth=OAuth(access_token_key, access_token_secret,api_key, api_secret))
# t.statuses.update(status="@RishabhKarajgi Hello twitterrrr")


def sendmessage(user, msg, to_reply_id):
	url = "https://api.twitter.com/1.1/statuses/update.json?status="
	msg = "%40"+user+" "+ msg + "&in_reply_to_status_id="
	end_url =  url+msg+to_reply_id
	end_url = end_url.encode('utf-8')
	auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
	r = requests.post(end_url, auth=auth,proxies=proxies)
	print r.content


# sendmessage("RishabhKarajgi", "try this", "635075978780213248")