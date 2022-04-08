const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

console.log('Environment: ' + app.get('env').toLowerCase());
console.log('Initializing Express');


console.log('Initializing the EJS view engine');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.locals = {
    title: 'Guess The Year',
    message: 'This is a message'
  };
  res.render('view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

app.listen(3000);
console.log('Listening on port 3000');