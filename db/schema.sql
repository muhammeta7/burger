CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id int AUTO_INCREMENT,
  burgerName  varchar(100) NOT NULL,
  devoured BOOLEAN DEFAULT false ,
  date TIMESTAMP,
  PRIMARY KEY(id)
);


