# start.sh
#!/bin/bash
python manage.py migrate
gunicorn djangoProject.wsgi