# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Complaint',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=10)),
                ('description', models.TextField()),
                ('difficulty', models.IntegerField(default=0)),
                ('userid', models.IntegerField(null=True)),
                ('location', models.CharField(max_length=100)),
                ('latitude', models.CharField(max_length=30)),
                ('longitude', models.CharField(max_length=30)),
                ('approved', models.BooleanField(default=True)),
                ('image', models.ImageField(upload_to=b'complaint_images', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='IncompleteComplaint',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=100, null=True)),
                ('type', models.CharField(max_length=10, null=True)),
                ('description', models.TextField(null=True)),
                ('userid', models.IntegerField(null=True)),
                ('location', models.CharField(max_length=100, null=True)),
                ('latitude', models.CharField(max_length=30, null=True)),
                ('longitude', models.CharField(max_length=30, null=True)),
                ('image', models.ImageField(upload_to=b'incomplete-complaints', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Mapobject',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('location', models.CharField(max_length=100)),
                ('latitude', models.CharField(max_length=30)),
                ('longitude', models.CharField(max_length=30)),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('parent_tweet_id', models.AutoField(serialize=False, primary_key=True)),
                ('mode', models.IntegerField(default=0, null=True)),
                ('reply_to_tweetid', models.CharField(max_length=100, null=True)),
                ('state', models.IntegerField(default=-1)),
                ('statelist', models.CharField(default=b'0000000', max_length=100)),
                ('referral_id', models.ForeignKey(to='foundation.IncompleteComplaint')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
