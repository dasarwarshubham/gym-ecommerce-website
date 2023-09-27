"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 4.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

import os
from pathlib import Path
from datetime import timedelta
from celery.schedules import crontab
from rest_framework.settings import api_settings

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent
# Load environment variables from .env file
with open(".env") as f:
    for line in f:
        line = line.strip()
        if line:
            key, value = line.split("=", 1)
            os.environ[key] = value


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',

    # other apps
    'corsheaders',
    'knox',
    'django_filters',
    'django_rest_passwordreset',
    'defender',

    # installed apps
    'apps.accounts',
    'apps.core'
]


# Overiding User Model
AUTH_USER_MODEL = "accounts.User"


REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'COERCE_DECIMAL_TO_STRING': False,
    'DEFAULT_AUTHENTICATION_CLASSES': ('knox.auth.TokenAuthentication', ),
    'USER_SERIALIZER': 'apps.accounts.serializers.UserSerializer',
}


REST_KNOX = {
    'SECURE_HASH_ALGORITHM': 'cryptography.hazmat.primitives.hashes.SHA512',
    # By default, it is set to 64 characters (this shouldn't need changing).
    'AUTH_TOKEN_CHARACTER_LENGTH': 64,
    # The default is 10 hours i.e., timedelta(hours=10)).
    'TOKEN_TTL': timedelta(hours=24),
    # 'TOKEN_TTL': timedelta(minutes=45),
    'USER_SERIALIZER': 'apps.accounts.serializers.UserSerializer',
    # By default, this option is disabled and set to None -- thus no limit.
    'TOKEN_LIMIT_PER_USER': None,
    # This defines if the token expiry time is extended by TOKEN_TTL each time the token is used.
    'AUTO_REFRESH': True,
    'MIN_REFRESH_INTERVAL': 30,  # number of seconds
    'EXPIRY_DATETIME_FORMAT': api_settings.DATETIME_FORMAT,
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'backend.middleware.ConditionalCsrfMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'defender.middleware.FailedLoginMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

# TIME_ZONE = 'UTC'
TIME_ZONE = "Asia/Kolkata"

USE_I18N = True

USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': os.environ.get("DATABASE"),
        'NAME': os.environ.get("DATABASE_NAME"),
        'USER': os.environ.get("DATABASE_USER"),
        'PASSWORD': os.environ.get("DATABASE_PASSWORD"),
        'HOST': os.environ.get("DATABASE_HOST"),
        'PORT': os.environ.get("DATABASE_PORT"),
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_PORT = 587
EMAIL_HOST_USER = os.environ.get("HOST_EMAIL")
EMAIL_HOST_PASSWORD = os.environ.get("HOST_PASSWORD")


# worker settings

DEFENDER_REDIS_URL = f'{os.environ.get("REDIS_DB_URL")}/0'
CELERY_BROKER_URL = f'{os.environ.get("REDIS_DB_URL")}/1'

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f'{os.environ.get("REDIS_DB_URL")}/2',
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}


CELERY_BEAT_SCHEDULE = {
    'periodic_task': {
        'task': 'apps.accounts.tasks.periodic_task',
        # 'schedule': 5  # every 5 seconds
        # 'schedule': 15 * 60  # every 15 minutes
        # 'schedule': crontab(day_of_week=1, hour=7, minute=30)  # every monday at 7:30
        'schedule': crontab(minute="*/15")  # every 15 minutes
        # 'schedule': crontab(minute="*/1")  # every 1 minutes
    }
}


LOGGING_DIR = os.path.join(BASE_DIR, 'logs')  # Set the directory for log files

if not os.path.exists(LOGGING_DIR):
    os.makedirs(LOGGING_DIR)


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler'
        },
        'gunicorn.access': {
            'level': 'INFO',
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': os.path.join(LOGGING_DIR, 'gunicorn/access.log'),
            'when': 'midnight',  # Rotate logs daily at midnight
            # Keep up to 30 backup log files (30 day's worth)
            'backupCount': 30,
            'formatter': 'verbose',
        },
        'gunicorn.error': {
            'level': 'ERROR',
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': os.path.join(LOGGING_DIR, 'gunicorn/error.log'),
            'when': 'midnight',  # Rotate logs daily at midnight
            # Keep up to 30 backup log files (30 day's worth)
            'backupCount': 30,
            'formatter': 'verbose',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console'],
            'level': os.environ.get('DJANGO_LOG_LEVEL', 'INFO')
        },
        'gunicorn.access': {
            'handlers': ['gunicorn.access'],
            'level': 'INFO',
            'propagate': False,
        },
        'gunicorn.error': {
            'handlers': ['gunicorn.error'],
            'level': 'ERROR',
            'propagate': False,
        },
    },
    'formatters': {
        'verbose': {
            'format': '{asctime} ({levelname}) - {name} - {message}',
            'style': '{'
        }
    }
}
