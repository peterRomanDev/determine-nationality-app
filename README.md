# SmallClaims Assignment
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
* displaying users
    * when a user in the list of users is clicked:
        - [] a user window pops-up (if a user is clicked the first time)``
        * the user window contains:
            - [] the name of the user
            - [] a list of possible nationalities
            * the list of possible nationalities:
                - [] is sorted from highest probability to lowest
                - [] contains country flags next to each nationality
                - [] percentage of probability next to each nationality
        - [] when another user is clicked, the information in the user window updates

## Goals
* separate logic in different JS files
* bundle the separate JS files using Vite
* lint the code using ESLint
* turn the JavaScript code into TypeScript code