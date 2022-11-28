from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response

from base.serializer import UserSerializer, UserSerializerWithToken
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data=super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')




@api_view(['GET'])
@permission_classes(IsAuthenticated)
def getuserprofile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    print('calling')
    data=request.data
    try:
        user=User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializers=UserSerializerWithToken(user,many=False)
        return Response(serializers.data)
    except:
        message={'details':'User with this email alredy exists'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)