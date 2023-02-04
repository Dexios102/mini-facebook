from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    total_followers = serializers.SerializerMethodField()
    is_following = serializers.SerializerMethodField()
    
    def get_total_followers(self, instance):
        return instance.followers.count()
    
    def get_is_following(self, instance):
        request = self.context.get('request', None)
        if request:
            user = request.user
            return user in instance.followers.all()
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'avatar', 'bio', 'total_followers', 'is_following')
        extra_kwargs = {'is_following': {'required': False}}

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'avatar', 'bio')

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'avatar')
