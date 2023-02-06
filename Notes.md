1. Figure out the Technologies required for the Task:
* Front-end Framework: **React**
* Back-end Framework: **Django** or Flask
* Database: **PostgreSQL**
* Axios for making API calls



2.  Create the development environment: React, Axios, Virtual Env, Django

        npx create-react-app my-app
        cd my-app
        npm install axios
        pip install django
        django-admin startproject myproject
        cd myproject
        python manage.py startapp api

3. Start PostgreSQL:

        brew services start postgresql
        createdb spaceships
        psql -d spaceships
        CREATE USER mlz WITH PASSWORD 'password';
        GRANT ALL PRIVILEGES ON DATABASE spaceships TO mlz;

4. Add the following to settings.py in the Django package:

        DATABASES = {
            'default': {
              'ENGINE': 'django.db.backends.postgresql',
              'NAME': 'spaceships',
              'USER': 'mlz',
              'PASSWORD': 'password',
              'HOST': 'localhost',
              'PORT': '5432',
              }
            }

5. Create the database tables where the Django models will be stored:

        pip install psycopg2-binary
        python manage.py makemigrations
        python manage.py migrate


