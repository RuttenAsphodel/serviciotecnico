from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from clientes.models import Cliente
from equipos.models import Equipo
from servicios.models import Servicio
from ordenes.models import Orden
from .serializers import ClienteSerializer, EquipoSerializer, ServicioSerializer, OrdenSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['nombre', 'email']
    search_fields = ['nombre', 'email', 'telefono']
    ordering_fields = ['nombre', 'fecha_registro']

class EquipoViewSet(viewsets.ModelViewSet):
    queryset = Equipo.objects.all()
    serializer_class = EquipoSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]    
    filterset_fields = ['tipo', 'marca', 'modelo']
    search_fields = ['tipo', 'marca', 'modelo', 'numero_serie']
    ordering_fields = ['fecha_ingreso']

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['nombre']
    search_fields = ['nombre', 'descripcion']
    ordering_fields = ['nombre', 'precio']    

class OrdenViewSet(viewsets.ModelViewSet):
    queryset = Orden.objects.all()
    serializer_class = OrdenSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['estado', 'cliente__nombre', 'fecha_creacion','servicios']
    search_fields = ['cliente__nombre', 'equipo__numero_serie']
    ordering_fields = ['fecha_creacion', 'fecha_actualizacion']

