from .common import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

DEBUG = True

REACT_APP_URL = "http://127.0.0.1:3000"
HOST_URL = "http://127.0.0.1:8000/"
ALLOWED_HOSTS = []


# Replace with the URL of your React app
CORS_ALLOWED_ORIGINS = [
    # Add more allowed origins if needed
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]
# CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

SESSION_COOKIE_SAMESITE = 'None'
CSRF_COOKIE_SAMESITE = 'None'

# CSRF_COOKIE_HTTPONLY = False
# SECURE_CROSS_ORIGIN_OPENER_POLICY = None


if DEBUG:
    INSTALLED_APPS += [
        'debug_toolbar',
        # 'silk'
    ]
    MIDDLEWARE.insert(0, 'debug_toolbar.middleware.DebugToolbarMiddleware')
#    MIDDLEWARE.append('silk.middleware.SilkyMiddleware')
    INTERNAL_IPS = [
        '127.0.0.1',
    ]
    DEBUG_TOOLBAR_CONFIG = {
        'SHOW_TOOLBAR_CALLBACK': lambda request: True,
    }

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

STATIC_URL = "/static/"

# directory where Django will collect static files.
STATIC_ROOT = os.path.join(BASE_DIR, "build/static")

# directory where your static files are stored.
# STATICFILES_DIRS = [os.path.join(BASE_DIR, "build/static")]
