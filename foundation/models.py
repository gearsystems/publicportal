from django.db import models
from django.contrib.auth.models import User
from constants import TYPE

class Complaint(models.Model):
	id=models.AutoField(primary_key=True)
	title= models.CharField(max_length=100)
	type=models.CharField(max_length=10)
	description=models.TextField()
	difficulty=models.IntegerField(default=0)
	userid=models.IntegerField(null=True)
	location = models.CharField(max_length = 100)
	latitude = models.CharField(max_length = 30)
	longitude = models.CharField(max_length = 30)
	approved = models.BooleanField(default=True)
	# rating = models.FloatField()
	image = models.ImageField(upload_to='complaint_images',blank=True)
	def __unicode__(self):
		return self.title

class Mapobject(models.Model):
	user = models.OneToOneField(User)
	location = models.CharField(max_length = 100)
	latitude = models.CharField(max_length = 30)
	longitude = models.CharField(max_length = 30)

class IncompleteComplaint(models.Model):
	id=models.AutoField(primary_key=True)
	title= models.CharField(max_length=100, null=True)
	type=models.CharField(max_length=10, null=True)
	description=models.TextField(null=True)
	userid=models.IntegerField(null=True)
	location = models.CharField(max_length = 100, null=True)
	latitude = models.CharField(max_length = 30, null=True)
	longitude = models.CharField(max_length = 30, null=True)
	image=models.ImageField(upload_to='complaint_images',blank=True)
	# rating = models.FloatField()
	def __unicode__(self):
		return self.title

class Tweet(models.Model):
	parent_tweet_id=models.CharField(max_length=100,primary_key=True)
	referralid=models.ForeignKey(IncompleteComplaint)
	mode = models.IntegerField(null=True,default = 0)
	reply_to_tweetid=models.CharField(max_length=100,null=True)
	state=models.IntegerField(default=-1)
	username = models.CharField(max_length=100,null=True)
	statelist=models.CharField(max_length=100,default="0000000")
	def __unicode__(self):
		return self.parent_tweet_id

