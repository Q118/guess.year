const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

// const getUser = require('./API/api');


console.log('Environment: ' + app.get('env').toLowerCase());

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.locals = {
    title: 'Guess The Movie',
    subTitle: 'Listen to Audio snippets below.',
    instructions: 'More points awarded the less you load.' 
    //todo: dynamically load here messages for win/loose
  };
  res.render('view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

// app.get('/api/user', async function (req, res) {
//   try {
//     const response = await getUser();
//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });


app.listen(3000);
console.log('Listening on port 3000');