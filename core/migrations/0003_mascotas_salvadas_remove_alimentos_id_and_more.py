# Generated by Django 5.0.6 on 2024-06-25 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_juguetes_salud_rename_producto_alimentos'),
    ]

    operations = [
        migrations.CreateModel(
            name='mascotas_salvadas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('imagen', models.ImageField(upload_to='productos/')),
                ('estado', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='alimentos',
            name='id',
        ),
        migrations.RemoveField(
            model_name='juguetes',
            name='id',
        ),
        migrations.RemoveField(
            model_name='salud',
            name='id',
        ),
        migrations.AddField(
            model_name='alimentos',
            name='idAlimentos',
            field=models.CharField(default=12, max_length=10, primary_key=True, serialize=False, verbose_name='Id alimentos'),
        ),
        migrations.AddField(
            model_name='juguetes',
            name='idJuguetes',
            field=models.CharField(default=12, max_length=10, primary_key=True, serialize=False, verbose_name='Id jueguetes'),
        ),
        migrations.AddField(
            model_name='salud',
            name='idSalud',
            field=models.CharField(default=12, max_length=10, primary_key=True, serialize=False, verbose_name='Id Salud'),
        ),
    ]
