from .common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

DEBUG = False

REACT_APP_URL = os.environ.get("REACT_APP_URL")
HOST_URL = os.environ.get("DJANGO_APP_URL")
ALLOWED_HOSTS = ["16.171.21.29", "127.0.0.1", "localhost", "www.fitflex.site", "fitflex.site"]


# Replace with the URL of your React app
CORS_ALLOWED_ORIGINS = [
    HOST_URL,
    'http://localhost',
    'http://127.0.0.1',
]
CORS_ALLOW_CREDENTIALS = True
# CSRF_COOKIE_SECURE = True
# SECURE_CROSS_ORIGIN_OPENER_POLICY = None

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# URL for serving static files.
STATIC_URL = "/static/"

# directory where Django will collect static files.
STATIC_ROOT = os.path.join(BASE_DIR, "build/static")
