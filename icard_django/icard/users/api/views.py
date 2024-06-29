from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status

from users.models import User
from users.api.serializers import UserSerializer

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        # Copiar los datos del request
        data = request.data.copy()
        # Mostrar la contraseña antes de encriptarla
        print("Contraseña antes de encriptar:", data["password"])
        # Encriptar la contraseña
        data["password"] = make_password(data["password"])
        # Mostrar la contraseña después de encriptarla
        print("Contraseña después de encriptar:", data["password"])
        # Serializar los datos
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        # Crear el usuario
        self.perform_create(serializer)
        print("Data:", data)
        headers = self.get_success_headers(serializer.data)
        print("serializer.data:", serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def partial_update(self, request, *args, **kwargs):
        password = request.data["password"]
        if password:
            request.data["password"] = make_password(password)
        else:
            request.data["password"] = request.user.password
        return super().update(request, *args, *kwargs)

class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
