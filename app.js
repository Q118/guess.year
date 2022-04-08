const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

console.log('Environment: ' + app.get('env').toLowerCase());
console.log('Initializing Express');


console.log('Initializing the EJS view engine');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/master');

app.get('/', function(req, res) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('the-view', locals);
});

app.listen(3000);