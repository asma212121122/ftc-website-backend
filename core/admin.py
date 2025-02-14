from django.contrib import admin
from .models import Workshop, Event, Member
# Register your models here.

admin.site.register(Workshop)
admin.site.register(Event)
admin.site.register(Member)