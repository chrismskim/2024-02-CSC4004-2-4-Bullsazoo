from django.urls import path
from .views import UserSignupView, UserLoginView

urlpatterns = [
    # 회원가입 API URL
    path('signup/', UserSignupView.as_view(), name='user_signup'),

    # 로그인 API URL
    path('login/', UserLoginView.as_view(), name='user_login'),
]
