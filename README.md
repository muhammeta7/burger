## :hamburger: Sequelize a Burger :fries:

### Overview

Using sequelize and node express servers, HW15 of the coding bootcamp is to create a burger app with associations and migrations. The user will be able to create a burger or devour one. Sequelize will initialize a database to update the HTML on screen based on user actions.

### Getting Started

heroku link: https://burgersequelized.herokuapp.com/


## :satellite: Technologies used 

Frontend: `Bootstrap` and Google-Fonts are used for the styling framework. Handlebars is used to render newly created burger into relevant sections of page.

Backend: App uses  `express` to serve routes and  `sequelize` to interact with a `mySQL` database. Refer to burger_controller.js file to see routes. 

### Prerequisites

```
See package.json

```
 

## Directory Structure


#### Sequelize MVC File Layout

```
.
├── config
│   └── config.json
│ 
├── controllers
│   └── burgers_controller.js
│
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │  
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

```
## Screenshots

### Landing Page
![Landing Page](/screenshots/landing.png)

#### Create a New Burger Section
![View Comments](/screenshots/create.png)

#### New Burger Appears on Burger List & Devour Burger
![View Comments](/screenshots/delete.png)

## Built With 

* Node
* Sequelize
* Terminal/Gitbash
* Sublime Text - Text Editor

## Authors

* **Muhammet Aydin** - *Sequelize/Node/Express* - [Muhammet Aydin](https://github.com/muhammeta7)

## Acknowledgements

Dan and Nate for all the help