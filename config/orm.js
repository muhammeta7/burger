/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

var orm = {
  
  all: function (tableInput, cb) {
    var queryString = ('SELECT * FROM ' + tableInput + ';');
    connection.query(queryString, function(err, result){
      if(err) throw(err);
      cb(result);
    });
  },

  create: function(table, cols,  vals, cb) {
    var queryString = 'INSERT INTO burgers (burgerName) VALUES ("' + cols + '");';
    connection.query (queryString, vals, function(err, result) {
      if(err) throw(err);
      cb(result);
    });
  },

  update: function(id, cb) {
    var queryString = 'UPDATE burgers SET devoured=true WHERE id =' + id + ';';
    connection.query(queryString, function (err, result) {
      if(err) throw(err);
      cb(result);
    });
  }
    
};

module.exports = orm;
