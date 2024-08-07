# Generated by Django 5.0.7 on 2024-08-07 13:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ordenes', '0001_initial'),
        ('servicios', '0002_alter_servicio_precio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orden',
            name='servicios',
        ),
        migrations.AddField(
            model_name='orden',
            name='servicios',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ordenes', to='servicios.servicio'),
        ),
    ]
