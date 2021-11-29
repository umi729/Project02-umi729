# MovieBook

## [Link To MovieBook Front End](https://github.com/SamZirbel/Project2_FrontEnd)

## Project Explanation / Overview

‘MovieBook’ is an application where movie watchers can collaborate on recommendations.  The application allows a user to search for movies of interest to see the opinion of others.  Users are able to rate a title, keep a listing of their favorites, and post new reviews.  A user search shows a movie’s favorite count, the average rating, and past reviews.

## Features Implemented

- Single Page Application (SPA) functionality utilizing Angular 10
- User Registration
- User Login
- Password Reset
- Persisted passwords are encrypted
- OMDB external API Querying
- Users can search for movies
- Users can view movie details
- Users can favorite movies
- Users can view their favorited movies
- Users can write a review for a movie
- Users can view past reviews for selected movies
- Users can rate a movie from 1 to 10
- Users can view the average rating of all MovieBook users for a movie
- Users can view movie statistics from other rating websites
- Users can view movie details
- Data persisted with a PostgreSQL database hosted with AWS RDS
- Aspect Oriented Programming Loggin, AOP
- Hosted with Jenkins
- Containerized with Docker
- DAO design pattern
- Three Tier Architecture

## Technologies Used

Java, JUnit, Log4J, Javalin, HTML, CSS, JavaScript, Hibernate, AWS RDS, SQL

## Set Up / Usage Guide

1. Navigate to the desired directory to host the project inside a Terminal or console
2. Use the following command to obtain back end project files: 
> git clone https://github.com/SamZirbel/Project2_BackEnd.git
3.  Use the following command to obtain front end project files: 
> git clone https://github.com/SamZirbel/Project2_FrontEnd.git
4. Open an IDE such as Eclipse or Spring Tool Suite
5. Import the project from the chosen host directory which it was cloned into
6. Navigate to project2_BackEnd / Project2 / src / main / resources / application.properties
7. Modify database properties under the comment "#hibernate" to reflect a personal postgreSQL database
> - spring.datasource.url
> - spring.datasource.username
> - spring.datasource.password

> _Note : Regarding the connection url - if using a jdbc postgreSQL database you can use the format jdbc:postgresql://\<Host Database URL\>:\<Desired Port\>/\<Database Name\>_
8. Save application.properties changes
9. Right click the project name within the Package Explorer
10. Run the project as a Spring Boot App
11. Open a linux terminal
12. Navigate to the direcotry which you cloned the Project2_FrontEnd files into
13. Navigate into Project2_FrontEnd
14. enter the command :
15. > ng serve -o
16. Enjoy the application

## Contributors

Contributors : 
1. Umer Zahid
2. Benjamin Linthicum
3. Justin Chang
5. Samuel Zirbel
