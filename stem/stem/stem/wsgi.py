import os
import sys

sys.path.append('/opt/bitnami/apps/django/django_projects/stem')
os.environ.setdefault("PYTHON_EGG_CACHE", "/opt/bitnami/apps/django/django_projects/stem/egg_cache")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "stem.settings")
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()














