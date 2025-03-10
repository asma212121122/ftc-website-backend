# Generated by Django 5.1.4 on 2024-12-24 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='events/images/')),
                ('date', models.DateField()),
                ('place', models.CharField(max_length=200)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('linkedin_account', models.URLField(max_length=100)),
                ('role', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('prom', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='members/images/')),
            ],
        ),
        migrations.CreateModel(
            name='Workshop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('trainer', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='workshops/images/')),
                ('date', models.DateField()),
                ('place', models.CharField(max_length=200)),
                ('description', models.TextField()),
            ],
        ),
    ]
