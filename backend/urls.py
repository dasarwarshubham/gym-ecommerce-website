"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include, re_path
# from django.views.generic import TemplateView

# Required for Media
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    # path('', TemplateView.as_view(template_name="core/index.html")),
    path(f'{os.environ.get("DJANGO_ADMIN_URL_SECRET")}/admin/defender/', include('defender.urls')),
    path(f'{os.environ.get("DJANGO_ADMIN_URL_SECRET")}/admin/', admin.site.urls),
    path('auth/', include('apps.accounts.urls')),
    path('api/', include('apps.core.urls'))
]

if settings.DEBUG:
    urlpatterns += [
        path('__debug__/', include('debug_toolbar.urls')),
        # path('silk/', include('silk.urls', namespace='silk')),
    ]
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
else:
    urlpatterns += [
        re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
        # re_path(r'^django_static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    ]


admin.site.site_header = 'FitFlex Admin Panel'
admin.site.site_title = "FitFlex admin site"
admin.site.index_title = "FitFlex Admin"
admin.site.enable_nav_sidebar = True  # default=True
