if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
// ^allows us to use PUT and DELETE

const getRandomID = require('./API/api.js');
const movieArr = require('./data/movies.json').movies;
const checkAuthenticated = require('./auth/check.js');
const checkNotAuthenticated = require('./auth/check.js');

const passport = require('passport');
const initializePassport = require('./auth/passport-config');
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);



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

// app.use(express.urlencoded({ extended: false }))
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session()); //!persist variables for entire user's session

app.use(methodOverride('_method')); //allows us to use PUT and DELETE

// #endregion

//todo need to be logged in to access
app.get('/', checkAuthenticated, async (req, res) => {
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
  res.render('view', { name: req.user.name });
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

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login')
})

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})


app.delete('/logout', (req, res) => {
  req.logOut(); // this will clear our sesson and logout the user from passport
  res.redirect('/login');
});

app.listen(3010);
console.log('Listening on port 3010');