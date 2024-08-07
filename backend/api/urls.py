from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, EquipoViewSet, ServicioViewSet, OrdenViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'equipos', EquipoViewSet)
router.register(r'servicios', ServicioViewSet)
router.register(r'ordenes', OrdenViewSet)


urlpatterns = [
    path('', include(router.urls)),
]