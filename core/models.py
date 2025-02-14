from django.db import models

# Create your models here.
class Workshop(models.Model):
    title = models.CharField(max_length=200)
    trainer = models.CharField(max_length=100)
    image = models.ImageField(upload_to='workshops/images/')
    date = models.DateField()
    place = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title
class Event(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='events/images/')
    date = models.DateField()
    location = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Member(models.Model):
    name = models.CharField(max_length=100)
    linkedin_account = models.URLField(max_length=100)
    role = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    prom = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='members/images/')

    def __str__(self):
        return self.name