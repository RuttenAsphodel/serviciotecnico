# Generated by Django 5.0.7 on 2024-08-07 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicios', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicio',
            name='precio',
            field=models.DecimalField(decimal_places=0, max_digits=10),
        ),
    ]
