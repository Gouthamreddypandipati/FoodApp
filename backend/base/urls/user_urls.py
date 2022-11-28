from django.urls import path
from base.views import user_views as views

urlpatterns=[
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getRoutes,name='routes'),
    path('profile/',views.getuserprofile,name='user_profile'),
    path('register/',views.registerUser,name='register'),
]