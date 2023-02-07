1. Figure out the Technologies required for the Task:
* Front-end Framework: **React**
* Back-end Framework: **Django** or Flask
* Database: **PostgreSQL**
* Axios for making API calls



2.  Create the development environment: React, Axios, Virtual Env, Django

        npx create-react-app spaceship-app
        cd spaceship-app
        npm install axios
        pip install django
        django-admin startproject spaceshipproject
        cd spaceshipproject
        python manage.py startapp api

3. Start PostgreSQL:

        brew services start postgresql
        createdb spaceships
        psql -d spaceships
        CREATE USER mlz WITH PASSWORD 'password';
        GRANT ALL PRIVILEGES ON DATABASE spaceships TO mlz;

4. Add the following to settings.py in the Django package (and 'api' to INSTALLED_APPS)

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

5. In the models.py file within the api app to send to the database tables the Django models that will be stored:

        pip install psycopg2-binary
        python manage.py makemigrations
        python manage.py migrate

6. Create a super user for MLZ:

        python manage.py createsuperuser

7. Run the server:

        python manage.py runserver

8. Create a function in api/view.py to get the data from the db and render it on a template
   
9.  Create an HTML in the templates directory to render the data

10. Add the templates dir to settings:

        'DIRS': [os.path.join(BASE_DIR, 'templates')],

11. In spaceshipproject/urls.py create a URL pattern that maps to api.view
12. in api/urls.py reference the html file in Templates
13. Create a Test to make sure the template html is rendered in tests.py
