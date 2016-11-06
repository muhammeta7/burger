/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

var orm = {
  
  displayAll: function (tableInput, cb){
    var queryString = ('SELECT * FROM' + tableInput + ';');
    connection.query(queryString, function(err, result){
      if(err) throw(err);
      cb(result);
    });
  },

  createBurger: function(table, vals, cb){
    var queryString = 'INSERT INTO' + table;
    queryString = queryString + ' (';
    queryString = queryString + vals;


  }

}
