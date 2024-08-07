from django.db import models
from clientes.models import Cliente

class Equipo(models.Model):
    EQUIPO_CHOICES = [
        ('PC', 'PC Escritorio'),
        ('Notebook', 'Notebook'),
        ('Impresora', 'Impresora'),
        ('Scanner', 'Scanner'),
    ]
    
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='equipos')
    tipo = models.CharField(max_length=50, choices=EQUIPO_CHOICES, default='PC Escritorio')
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    numero_serie = models.CharField(max_length=50, blank=True)
    fecha_ingreso = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.tipo} - {self.marca} - {self.modelo}"