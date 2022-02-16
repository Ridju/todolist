from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Todo
        fields = "__all__"
        read_only_fields = ['user']

    def create(self, validated_data):
        todo = Todo.objects.create(
            user = self.context['request'].user,
            **validated_data
        )

        return todo