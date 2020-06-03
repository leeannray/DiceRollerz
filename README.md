# Dice Rollerz
![travis badge](https://img.shields.io/travis/Brian-Fairbanks/TV-Tracker)

## Description
<img src="https://raw.githubusercontent.com/Brian-Fairbanks/DiceRollerz/master/client/public/icons/DRZ.png" align="right" alt="Dice Rollerz Logo by Brian Fairbanks" width="150" height="150">
Dice Rollerz is an online chat app that helps D&D enthusiasts communicate and organize while seperated by distance.

- Users can create accounts and customize their profiles with avatars. 
- Registered users can create create chat rooms and send/receive messages from other users.
- In future builds, the chat app will incorperate game tools such as a dice roller to further aid users.


## Table of Contents
* [License](#license)
* [Scripts](#Scripts)
* [Dependencies](#dependencies)
* [Verfification](#verfification)
* [Testing](#tests)
* [Account Handling](#accounts)
* [Credits](#contributing)
* [Testing](#tests)
* [Questions](#questions)
* [Demo](#demo)

## License

<details open>
<summary>ICS License</summary>
<br>
Copyright 2020 Brian Fairbanks, Jonathan Andrews, Lee Ann Norman, Sergio Bracamontes, Jason Strouphauer

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
</details>


## Scripts
### Install
    npm install
### Run (production)
    npm start
### Build
    npm run build

## Dependencies
### Extenal APIs
* Coming soon

### Node Extensions
#### General
* "@material-ui/core": "^4.10.0",
* "@material/top-app-bar": "^6.0.0",
* "axios": "^0.19.2",
* "bcrypt": "^4.0.1",
* "bcryptjs": "^2.4.3",
* "body-parser": "^1.19.0",
* "express": "^4.17.1",
* "if-env": "^1.0.4",
* "is-empty": "^1.2.0",
* "jsonwebtoken": "^8.5.1",
* "material-components-web": "^6.0.0",
* "material-ui": "^0.20.2",
* "materialize": "^1.0.0",
* "materialize-css": "^1.0.0-rc.2",
* "mongoose": "^5.9.16",
* "passport": "^0.4.1",
* "passport-jwt": "^4.0.0",
* "react-materialize": "^3.9.2",
* "react-router-dom": "^5.2.0",
* "react-scroll-to-bottom": "^2.0.0",
* "react-tap-event-plugin": "^3.0.3",
* "socket.io": "^2.3.0",
* "validator": "^13.0.0"

#### Dev
* "concurrently": "^4.1.2",
* "nodemon": "^1.18.7"


## Verfification

### Protected Master
The master branch is protected, and requires at least one peer review to merge into.


## Tests
Manually tested.  No additinal frameworks used.

## Accounts
### Security
Account passwords are salted, hashed, and stored privately, with the help of the ByCrypt Package
### Persistance
Accounts, on log in, are assigned a JSON Web Token, which may be presented for up to one year.
This is stored in the browsers local storage, and compared each login to mainain a persistant login session.

## Contributing
Members Contributing on this project:
* [Brian Fairbanks](https://github.com/Brian-Fairbanks)
    * Project Manager
    * Deployment Handling
    * Database creation/management
    * API Backends
    * ChatRoom/New Message creation
    * Message Deletion Functionality
    * Socket.io (realtime) message updates
    * Account Verification and Login error handling
    * Authenticated Pages and Redircts
    * Logout Functionality
    * Icons/Images
    * Styling
    * Code Formatting / Cleanup

* [Jonathan Andrews](https://github.com/ionathas78)
    * User Profile page
    * Header/Side Nav
    * API calls from front end
    * Socket.io (realtime) Chatroom Additions
    * User authentication for message edits/deletes
    * Edit Message Functionality
    * User Authentication for Viewing Chatrooms
    * Member Additions per Chatroom


* [Sergio Bracamontes](https://github.com/warsurge)
    * Landing page 
    * Sign up page
    * Signup Validations, Front and Back End
    * API calls from front end
    * Message Avatar Settings

* [Jason Strouphauer](https://github.com/jdstroup10)
    * Login page
    * Account Verification and Login error handling
    * API calls from front end
    * Documentation

* [Lee Ann Norman](https://github.com/leenorman)
    * UI/UX Design



## Questions
If you have any questions about this application, feel free to reach out to one of our members below:

leeann.nrmn@gmail.com

brian.k.fairbanks@gmail.com


## Demo
Deployed to Heroku:
* Staging: https://dice-rollerz-stg.herokuapp.com/
* Production: https://dice-rollerz.herokuapp.com/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Requirements
* Must use ReactJS in some way (even if minimal)
* Must use a Node and Express Web Server
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM  
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least two libraries, packages, or technologies that we haven’t discussed
* Must allow for or involve the authentication of users in some way
* Must have a polished frontend/UI 
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server