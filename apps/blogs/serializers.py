from rest_framework import serializers
from .models import Blog


class BlogListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'image', 'description']


class BlogDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'image', 'description', 'content', 'created_at']
