// Create all the functions for routing in app, and the logic of each route.

var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// 

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// Displays burger list

router.get('/burgers', function (req, res) {
  burger.all(function (data) {
    var burgerObj = { burgerList: data };
    console.log(burgerObj);
    res.render('index', burgerObj);
  });
});

// Create Burger 

router.post('/burgers/create', function(req, res){
  burger.create([req.body.burgerName],function() {
    res.redirect('/burgers');
  });
});

//  Update burgers that are devoured

router.put('/burgers/update/:id', function (req, res) {
  var condition = req.params.id;

  console.log('condition ', condition);

  burger.update(condition, function () {
    res.redirect('/burgers');
  });
});


module.exports = router;