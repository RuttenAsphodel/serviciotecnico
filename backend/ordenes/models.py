from django.db import models
from clientes.models import Cliente
from equipos.models import Equipo
from servicios.models import Servicio

class Orden(models.Model):
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('en_proceso', 'En Proceso'),
        ('completado', 'Completado'),
        ('cancelado', 'Cancelado'),
    ]

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='ordenes')
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE, related_name='ordenes')
    servicios = models.ForeignKey(Servicio,on_delete=models.CASCADE, related_name='ordenes', default=1)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='pendiente')
    descripcion_problema = models.TextField()
    notas_tecnico = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Orden #{self.id} - {self.cliente.nombre}"