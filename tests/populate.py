import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "publicportal.settings")

from foundation.models import *



latlng = [(17.416492, 78.390504),(17.417653, 78.395083),(17.412166, 78.395813),(17.419452, 78.412483),(17.421986, 78.383153),(17.416316, 78.383828)]
locations = ['Malgudi', 'Narne estates','Sri Malikarjuna Temple','Jubilee Hills check post', 'Ramadurgam Bar', 'Rock Park']
titles = ['Open drain', 'Uncollected garbage', 'Broken street lights', 'Open manhole', 'Broken road', 'Unattended garbage']
types = ['MC', 'SB','MC','MC','MC','SB']
descs = ['Drain has been left open for the past 5 days',
		'Garbage left Uncollected for the past 1 week',
		'Street lights are not working',
		'Manhole is open',
		'Road has to be reconstructed',
		'Garbage not collected']
# images_path = os.path.join(os.path.dirname(__file__),'/media').replace('\\','/')
images = ['/opendrain.jpg', '/uncollectedgarbage.jpg', '/streetlights.jpg','openmanhole.jpg','brokenroad.jpg','garbage.jpg']

# print images_path
for i in range(0,6):
	# print ""
	c = Complaint(title = titles[i],location = locations[i], type = types[i], description = descs[i],latitude = latlng[i][0],longitude=latlng[i][1], image = images[i])
	c.save()