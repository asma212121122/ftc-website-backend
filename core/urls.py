from django.urls import path
from . import views  

urlpatterns = [
    path('', views.home, name='home'), 
    path('events/', views.event_list, name='event_list'),
    path('api/events/', views.EventListView.as_view(), name='event-list-api'),
    path('members/', views.member_list, name='member_list'),
    path('api/members/', views.MemberListView.as_view(), name='member-list-api'),
    path('workshops/', views.workshop_list, name='workshop_list'), 
    path('api/workshops/', views.WorkshopListView.as_view(), name='workshop_list-api'), 
    path("send-email/", views.send_email, name="send_email"),
    path("health/", healthcheck, name="healthcheck"),
]
