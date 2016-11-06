var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//GET request displays all burgers
app.get('/', function(req, res) {
  connection.query('SELECT * FROM burgers', function(err, data){
    if(err) throw err;
    res.render('index', {burgerList: data})
  })
});

// POST request to add new Burger
app.post('/create', function(req,res){
    connection.query('INSERT INTO burgers (burgerName) VALUES (?)', [req.body.burger], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

// POST request to devour burger
app.delete('/delete', function(req,res){
    connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

// POST request to update Devoured Burgers Panel
app.put('/update', function(req,res){
    connection.query('UPDATE plans SET movies = ? WHERE id = ?', [req.body.burger, req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});


var port = 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});

