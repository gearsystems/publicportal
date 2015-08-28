
import json
import requests
from requests_oauthlib import OAuth1

api_key = "G6sE56UKzO6rTYnQtqVUZ9npu"
api_secret = "uVxos5yQcGXHKbe0mJqykp1iTUuFZlckaA20nPkethgWQM7wjx"
access_token_key = "3155136210-uvRjzVMveHB6iX2Ix9zHp8QVkZ5sCrCbiNXHs1B"
access_token_secret = "PHwlyXMkBgEuzRuD4Q3r9bMCNfUDQXAzg0JC0SQwCrCfW"




def sendmessage(user, msg, to_reply_id):
	url = "https://api.twitter.com/1.1/statuses/update.json?status="
	msg = "%40"+user+" "+ msg + "&in_reply_to_status_id="
	end_url =  url+msg+to_reply_id
	end_url = end_url.encode('utf-8')
	auth = OAuth1(api_key, api_secret, access_token_key, access_token_secret)
	r = requests.post(end_url, auth=auth)
	# print r.content

