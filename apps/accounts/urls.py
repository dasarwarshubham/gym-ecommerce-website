from .views import AccountRegisterView, LoginView, AccountView, ChangePasswordView, VerifyEmailView, CreateEmailVerificationToken

from django.urls import path, include
from knox import views as knox_views

urlpatterns = [
    path('signup/', AccountRegisterView.as_view(), name='signup'),
    path('user/', AccountView.as_view(), name='user-details'),
    path('verify-email/<int:user_id>/<str:token>/',
         VerifyEmailView.as_view(), name='verify-email'),
    path('verify-email/<int:user_id>/<str:token>/generate-token/',
         CreateEmailVerificationToken.as_view(), name='verify-email-new'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('password-reset/',
         include('django_rest_passwordreset.urls', namespace='password-reset'))
]

# from .views import AccountRegisterView, LoginView, AccountView, ChangePasswordView
# from django_rest_passwordreset.views import reset_password_validate_token, reset_password_confirm, reset_password_request_token

# from django.urls import path
# from knox import views as knox_views

# urlpatterns = [
#     path('signup/', AccountRegisterView.as_view(), name='signup'),
#     path('user/', AccountView.as_view(), name='user-details'),
#     path('login/', LoginView.as_view(), name='login'),
#     path('logout/', knox_views.LogoutView.as_view(), name='logout'),
#     path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
#     path('change-password/', ChangePasswordView.as_view(), name='change-password'),
#     path('password-reset/', reset_password_request_token, name='reset-password-request'),
#     path('password-reset/validate_token', reset_password_validate_token, name='reset-password-validate'),
#     path('password-reset/confirm', reset_password_confirm, name='reset-password-confirm'),
# ]
