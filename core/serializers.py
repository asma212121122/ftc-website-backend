from rest_framework import serializers
from .models import Event, Workshop, Member

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'image', 'date', 'location', 'description']

class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = ['id', 'title', 'trainer', 'image', 'date', 'place', 'description']

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name','prom' ,'department','linkedin_account', 'role', 'description', 'image']
