var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Paswerd7?2790',
  database : 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);
});

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

app.delete('/delete', function(req,res){
  console.log(req.body);
    connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});


var port = 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});

// {{#each burgerList}}
//   <ul>
//     <p>ID: {{this.id}}</p>
//     <p>Name: {{this.burgerName}}</p>
//   </ul>
// {{/each}}