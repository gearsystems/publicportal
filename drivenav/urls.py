from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index , name='index'),
    url(r'^index/', views.index, name='index'),
    url(r'^issues/', views.issues, name='issues'),
    url(r'^route/(?P<issue_id>\d+)/$', views.route, name='route'),
]