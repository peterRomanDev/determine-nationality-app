# SmallClaims Assignment

## Table Of Contents

* [Description](#description)
* [How To Use The Application](#how-to-use-the-application)
* [Goals](#goals)
* [Tasks](#tasks)
* [Feedback](#feedback)
* [Author](#author)

## Description

This web application allows you to determine probable nationalities of users.

## How To Use The Application

In order to use the application, simply open the index.html file. You will land on the home page of the portal.

Click "Manage Users" on the sidebar to view the list of users and the user information window. There are already some users in the list but you can add more by typing the name in the input field (only letters are allowed). When submitted, the name is added to the list and the information about probable nationalities is displayed. These nationalities are sorted from the most to the least probable.

You can view the info by clicking on a user, or by submitting the form. The names in the list of users are sorted alphabetically and remain there even after page reload, unless explicitly deleted by pressing the corresponsing X button (with the exception of the intial users, these will always be loaded in).

## Goals

* user list is rendered alphabetically
* name input field submits on "Enter" key
* validation: input field only accepts letters, no spaces
* the list should not look broken on various screen sizes
* view a list of user first names (JSON Placeholder API)
* add a new name to the list using an input field
* see nationality with probability percentage (sorted by highest to lowest) next to each name (see nationality api in acceptance criteria)
* see full country name next to the name instead of country code ( i.e. Denmark instead of DK)
* able to view the list with added names after page reload

## Tasks

### Styling and functionality

* sidebar
    - [x] create sidebar (HTML)
    - [x] style sidebar (CSS)
    - [x] show/hide sidebar by clicking the toggle button (JS)
    - [x] highlight clicked button (JS)
* list of users
    - [x] create a list of users (HTML)
    - [x] style the list of users (CSS)
    - [x] highlight clicked user (JS)
    - [x] create a user form (HTML)
    - [x] style the user form (HTML)
* user window
    - [x] create the user window in HTML
    - [x] style the user window in CSS
- [x] make the entire website responsive for mobile, tablet and desktop

### Displaying Users

* add user form
    - [x] write a regular expression which only accepts letters, no spaces
    * provide visual communication:
        - [x] green border if the regular expression passes
        - [x] red border if the regular expression doesn't pass
        - [x] a message if the regular expression doesn't pass
        - [x] no border if no value provided
    - [x] the form can be submitted only if the input field contains a value
    - [x] the form can be submitted by pressing the Enter key
    * when the form is submitted
        - [x] the value is deleted from the input field
        - [x] the value is added to the list of users
        - [x] the values are sorted in alphabetical order
        - [x] the repeated values are not added to the list the second time
* fetch users
    - [x] fetch the users from the JSON placeholder API
    - [x] remove titles from names
    - [x] remove last names from names
    - [x] display the users' first names from the JSON placeholder API in the list of users
* displaying user information
    * when a user in the list of users is clicked:
        * the user window contains:
            - [x] the name of the user
            - [x] a list of possible nationalities
            * the list of possible nationalities:
                - [x] is sorted from highest probability to lowest
                - [x] percentage of probability next to each nationality
                - [x] country names show up next to the nationality
        - [x] when another user is clicked, the information in the user window updates
* storing users
    - [x] newly added user is stored in local storage
* deleting users
    - [x] add an X button next to each user
    - [x] remove the user by clicking the X button
    - [x] remove the user from local storage
* pages
    - [x] add home page
    - [x] make the home page load by default

## Feedback

In case you would like to provide feedback on this app, feel free to contact me at peter.roman24[at]gmail.com.

Any feedback is appreciated as I am always trying to improve my skills and work.

## Author

This portfolio is created and maintained by me, Peter Roman.

Connect with me:
* [GitHub](https://github.com/peterRomanDev)
* [LinkedIn](https://www.linkedin.com/in/proman2/)
