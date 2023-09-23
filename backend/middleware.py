import os
from django.middleware.csrf import get_token


class ConditionalCsrfMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith(f'/{os.environ["DJANGO_ADMIN_URL_SECRET"]}/admin/'):
            # Enable CSRF protection for admin routes
            get_token(request)
        else:
            # Disable CSRF for all other routes
            setattr(request, '_dont_enforce_csrf_checks', True)

        response = self.get_response(request)

        return response
