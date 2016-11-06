// Set up mmodel for how to interface with database

var orm = require('../config/orm.js');

var burger = {
  all: function (cb) {
    orm.all('')
  }
}