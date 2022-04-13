const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const getRandomID = require('./API/api.js');
const movieArr = require('./data/movies.json').movies;

//todo: modify so that we can hold users instead of just in memory
const users = [];

console.log('Environment: ' + app.get('env').toLowerCase());
// #region uses and sets
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// #endregion

//todo need to be logged in to access
app.get('/', async (req, res) => {
  const index = await getRandomID(movieArr);
  const movie = movieArr[index].title;
  const year = movieArr[index].year;
  res.locals = {
    title: 'Guess The Movie',
    subTitle: 'Listen to Audio snippets below.',
    instructions: 'The less you load, the more points awarded.',
    hardClip: movieArr[index].clips.srcHard,
    mediumClip: movieArr[index].clips.srcMedium,
    easyClip: movieArr[index].clips.srcEasy,
    answer: movie,
    year
  };
  res.render('view', {
    // additional locals, a custom layout, or other options can be defined here
  });
});

app.post('/guess', async (req, res) => {
  const userGuess = req.body.guess;
  const localAnswer = req.body.trueAnswer;
  console.log("guess: " + userGuess);
  console.log("answer: " + localAnswer);
  if (userGuess.toLowerCase().trim() === localAnswer.toLowerCase().trim()) {
    res.send({
      output: 'Correct'
    });
  } else {
    res.send({
      output: 'Wrong'
    });
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/login', (req, res) => {

});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.redirect('/register');
  }
  console.log(users);
});

app.listen(3000);
console.log('Listening on port 3000');