Note: using SS instead of Spaceships


## Setting Up the Environment and Files
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

## Creating a form for MLZ to submit choices

### Back-end - Django
1. Create a form in forms.py where the user can submit their choices for colour
2. Create a function in views.py that processes the form and checks it against the objects in the db, then returns the dictionary with the spaceship
3. In the HTML template add in the form with a button for submitting the form (to generate the query)
4. After this Django test succeeds then let's make the API endpoint
5. Create the Filter API in views.py
    - Add a queryset object to take in all the Spaceship Objects
    - Create a serializer class to turn it into a JSON format to be sent via API
    - Define the GET request function get_queryset(self) which will take in the request and filter the data
    - For **Colours**; we need to retrieve the query parameters, because multiple colours can be submitted in the form, we need to use getlist to get the list of colours and filter if colour__in colours.
    - For **Max Speed**; we need to get whether it is more than/less than/exactly the speed as one query paramter, and then get the input of speed MLZ would like to put in. We can use the filter function again here with "..lt" and "..gt" .etc
    - For **Manufacture Data**; similar to Max Speed, this needs a filter with before/after/exactly on the date, the only difference here is that it needs to convert the date from the query paramaters to a real date object for the database.
    - For **Pulse Laser**; This is a simple if yes, than return the spaceship objects that are true and if no, return the spaceship objects that are false.
    - We also have to create a list class that takes in the request and calls the get_queryset function, serializes the data and then sends the response to the Client.
6. We should add this function as a endpoint url in urls.py
7. Next we should test all these endpoints with Postman with some dummy data to make sure that the requests are working.

### Front-end - React
1. Run the below to make sure your React app is working:
        npm start
2. Create a file to put in your react code for the spaceships: Spaceships.js, and link it into App.js
3. 


## Limitations of the Project
- Due to limited time not enough testing done on the front-end, not enough edge cases
- Project should be packaged in a Docker container
- I should have mapped out the question first before "brute-forcing" it, at the end of the project I realised I forgot the case in which Spaceships may have multiple colours (many-to-many db relationship) and that Spaceships should have a name - needed to first map out the perspective of the user
- Spaceships.js is too big, I maybe could separate it with functions in other file




 
