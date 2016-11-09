// Create all the functions for routing in app, and the logic of each route.

var express = require('express');
var router = express.Router();
var Burger = require('../models')['Burger'];



router.get('/', function (req, res) {
  res.redirect('/index');
});

// Displays burger list

router.get('/index', function (req, res) {
  
  Burgers.displayAll ({})
  .then(function(result){
    var burgerObj = { burgerList: result };
    console.log(burgerObj);
    res.render('index', burgerObj);
  });

});

// Create Burger 

router.post('/burgers/create', function(req, res){
  
  var newBurger = req.body;
  
  Burger.create ({
    burgerName: newBurger.burgerName,
    devoured: false
  });
  res.redirect('/index');

});

//  Update burgers that are devoured

router.put('/burgers/update/:id', function (req, res) {
  
  var burgerID = req.params.id;

  Burger.findBurger ({
    where: {
      id : burgerID 
    }
  }).then(function(result) {
    if(result) {
      result.updateAttributes({
        devoured: req.body.devoured
      });
    }
    res.redirect('/index');
  });

});


module.exports = router;

