from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event, Workshop, Member
from .serializers import EventSerializer, WorkshopSerializer, MemberSerializer
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def event_list(request):
    events = Event.objects.all() 
    return render(request, 'event_list.html' , {'events':events})
def home(request):
    return render(request, 'home.html')

def member_list(request):
    members = Member.objects.all()
    return render(request, 'member_list.html' , {'members':members})

def workshop_list(request):
    workshops = Workshop.objects.all()
    return render(request, 'workshop_list.html' , {'workshops':workshops})

class EventListView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

class WorkshopListView(APIView):
    def get(self, request):
        workshops = Workshop.objects.all()
        serializer = WorkshopSerializer(workshops, many=True)
        return Response(serializer.data)

class MemberListView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

@csrf_exempt
def send_email(request):
    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        user_email = data.get("email")
        message = data.get("message")

        # Email details
        subject = f"Message from {first_name} {last_name}"
        email_message = f"From: {first_name} {last_name}\nEmail: {user_email}\n\n{message}"
        from_email = user_email        

        try:
            send_mail(
                subject,
                email_message,
                from_email, 
                ["chohraasma641@gmail.com"],  
                fail_silently=False,
            )
            return JsonResponse({"message": "Email sent successfully"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)
