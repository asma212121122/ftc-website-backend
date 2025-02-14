#!/bin/bash

# Install dependencies
pip install --no-cache-dir -r requirements.txt

# Migrate database
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Start Gunicorn server
gunicorn --bind 0.0.0.0:8000 your_project.wsgi:application
