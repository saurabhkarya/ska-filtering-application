To run the Application:

*Assumption: PostgreSQL, npm, Python are installed on your machine*

1. Clone the repo to your local machine
2. Create a virtual environment: `virtualenv venv`
3. Activate the virtual environment: `source venv/bin/activate `
4. Install the required dependencies: `pip install -r requirements.txt`
5. Install required packages: `npm install`
6. Start React application: `npm start`
7. Start the back-end server by navigating to spaceshipproject (Django Back-end Directory) `cd spaceshipproject`
8. Run the command `python manage.py runserver`
9. 
10. Connect to PostgreSQL database and backup database by running the command:
    `psql`
    `CREATE DATABASE spaceships`
    Exit with `\q`
    Restore database from sql file in Repo
    `psql spaceships backup.sql`
    Connect to the database `psql spaceships`
11. If you navigate to http://localhost:3000/ you will be able to see the React application
12. You can also send requests to the API http://127.0.0.1:8000/api/spaceships/filter/

*Note: If required - to access the db the username and password are:
        'USER': 'mlz',
        'PASSWORD': 'password'*