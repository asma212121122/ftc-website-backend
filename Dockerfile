# Use a lightweight Python image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Run migrations and collect static files
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# Expose the port
EXPOSE $PORT

# Start Gunicorn
CMD ["sh", "-c", "gunicorn --timeout 600 --workers 1 website.wsgi:application --bind 0.0.0.0:$PORT"]