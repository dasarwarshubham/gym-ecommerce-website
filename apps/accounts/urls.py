from .views import AccountRegisterView, LoginView, AccountView

from django.urls import path
from knox import views as knox_views

urlpatterns = [
    path('signup/', AccountRegisterView.as_view(), name='signup'),
    path('user/', AccountView.as_view(), name='user-details'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
