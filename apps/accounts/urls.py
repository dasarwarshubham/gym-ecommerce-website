from .views import AccountView, AccountRegisterView, LoginView, AccountUpdateView

from django.urls import path, include
from knox import views as knox_views

urlpatterns = [
    path('profile/', AccountView.as_view(), name="account-info"),
    path('profile/update/', AccountUpdateView.as_view(), name="account-update"),
    path('profile/create/', AccountRegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
