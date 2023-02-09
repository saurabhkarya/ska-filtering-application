Fullstack Software Engineer Question 1

Mr Little Z has multiple spaceships in his spaceport, and he finds it hard to keep track of them. He would like to build a web application to help him find the best spaceship for the job each day.

Each spaceship has multiple attributes: color, maximum speed, and date of manufacture. Some
spaceships are also equipped with a pulse-laser.

For maximum efficiency, Mr Little Z would like to be able to filter his spaceships by these features.

Build a filtering application that will generate a query string that fulfills Mr Little Z’s selected filters. Imagine that this query string will be sent to an API, which will return a list of spaceships. Updating the filters should update the query string. Please note that you are not expected to return any data: the final product will be the filter UI and a generated query string.

Colors
There are a fixed number of colors to choose from. Mr Little Z needs to be able to choose multiple color options:
● All the selected colors
● Any of the selected colors
● None of the selected colors

Maximum speed
Maximum speed is an integer between 50 and 200. Mr Little Z needs to be able to choose:
● Less than
● More than
● Exactly

Date of manufacture
Mr Little Z’s spaceships have been made between 1980 and 2020. Mr Little Z should be able to select dates:
● After
● Before
● On the exact date

Pulse-Laser
Mr Little Z would like to choose between
● Has pulse laser
● Does not have pulse laser

This app can be created using any modern framework (we use React). You are free to style the
application however you like, and other implementation details are up to you. You may use a 3rd-party date-picker, but other components should be built from scratch. Please include a README file with instructions for running the application.

Try not to spend longer than 4 hours on this task - if you don’t create every variation of each filter, that’s ok. The main focus of this exercise is on how you tackle the logic of combining multiple filters, and how you think about the structure of the query string. In a real-life scenario, this string would be used to query an API for data, and could also be shared in the page url to maintain filters.

Bonus Points
For bonus points, consider parsing the query string on page load, or even returning some filtered data.
