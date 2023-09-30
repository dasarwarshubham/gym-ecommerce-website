from django.urls import path, include
from knox import views as knox_views
from rest_framework.routers import DefaultRouter
from django_rest_passwordreset.views import ResetPasswordValidateTokenViewSet, ResetPasswordConfirmViewSet, \
    ResetPasswordRequestTokenViewSet

from .views import AccountRegisterView, LoginView, AccountView, \
    ChangePasswordView, VerifyEmailView, CreateEmailVerificationToken, \
    ContactUsViewSet


router = DefaultRouter()
router.register(
    'password-reset/validate_token',
    ResetPasswordValidateTokenViewSet,
    basename='reset-password-validate'
)
router.register(
    'password-reset/confirm',
    ResetPasswordConfirmViewSet,
    basename='reset-password-confirm'
)
router.register(
    'password-reset',
    ResetPasswordRequestTokenViewSet,
    basename='reset-password-request'
)
router.register('contact', ContactUsViewSet, basename='contact-us')

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
    path('', include(router.urls))
]
