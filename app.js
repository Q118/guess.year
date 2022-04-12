const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const movieJSON = require('./data/movies.json');

console.log('Environment: ' + app.get('env').toLowerCase());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const movieArr = movieJSON.movies;

const getRandomID = async (arr) => {
  const randomID = Math.floor(Math.random() * arr.length);
  return randomID;
}


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
  if (userGuess === localAnswer) {
    res.send({
      output: 'Correct!'
    });
  } else {
    res.send({
      output: 'Correct!'
    });
  }
});


// app.post('/result', (req, res) => {
//   //retrieve information from the post route defined above
//   console.log('result page'+ JSON.stringify(req.output));
//   res.render('result', {
//     output: req.output
//   });
// });

// app.get('/result', (req, res) => {
//   res.render('result', {
//     output: req.output
//   });
// });


app.listen(3000);
console.log('Listening on port 3000');