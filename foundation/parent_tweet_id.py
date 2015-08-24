



import json
import requests
# tweet_id = "634048331266719744"
# username = "RishabhKarajgi"
# from requests_oauthlib import OAuth1

# api_key = "RAxZJEaWAk9dN54EhMoaWQLmk"
# api_secret = "5220q5M9JRpiWGPhnWvhQcRP75Vf36UborGBtrV7US9FiCnMWk"
# access_token_key = "726275714-LdcIFgeFXMXdECMG3Kpv7bbUIKJAZ7JDjwiMFa4o"
# access_token_secret = "d6LL0lyxPVMfVzYZy88vSHOoOOahXjw6AgtutVqH4SlHL"

# 

# url = "https://api.twitter.com/1.1/statuses/show/"+tweet_id+".json"
# # url = 'https://stream.twitter.com/1.1/statuses/filter.json?track=kejriwal'
# auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
# try:
# 	r = requests.get(url, auth=auth,  timeout=10)
# except Exception as e:
# 	print "some random exeption. try again"

# tweet = json.loads(r.content)
# parent_tweet_id = tweet["in_reply_to_status_id_str"]
# parent_tweet_user_id = tweet["in_reply_to_screen_name"]

# print parent_tweet_id
# print parent_tweet_user_id

import re
def parent_id(username, tweet_id):
	r = requests.get("http://www.twitter.com/"+username+"/status/"+tweet_id)
	t  = re.search("data-tweet-id=\".*\"",r.content)
	parent = t.group(0)
	l = parent.split("\"")
	return l[1]
