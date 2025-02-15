#!/bin/bash

# Install dependencies
pip install --no-cache-dir -r requirements.txt

# Migrate database
python manage.py migrate

# Start Gunicorn server
gunicorn --timeout 600 --workers=1 website.wsgi:application --bind 0.0.0.0:$PORT