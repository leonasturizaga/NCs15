# Proyecto Backend con Django

Este proyecto es una aplicación de gestión de mascotas que proporciona endpoints para la creación y administración de propietarios de mascotas, mascotas y eventos relacionados. Está desarrollado utilizando Django y Django REST framework.

## Requisitos

- Python 3.10 o superior
- Django 3.0 o superior
- Django REST framework
- PostgreSQL

## Instalación

1. Clonar el repositorio:
   
   git clone https://github.com/No-Country/S15-21-M-Python-Js
   cd tu-repo

2. Crear y activar un entorno virtual:

    python3 -m venv .venv
    source .venv/bin/activate

3. Instalar las dependencias:

    pip install -r requirements.txt
    
4. Configurar la base de datos en settings.py:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'nombre_base_datos',
            'USER': 'usuario',
            'PASSWORD': 'contraseña',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

5. Aplicar las migraciones:

    python manage.py makemigrations
    python manage.py migrate

6. Crear un superusuario para acceder al admin de Django:

    python manage.py createsuperuser

7. Ejecutar el servidor de desarrollo:

    python manage.py runserver


## Documentación actualizada del proyecto

https://ncs15-petdocs-api.onrender.com/docs/

