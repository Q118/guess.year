// this file is to keep track of the score of the user
const scoreBoard = document.getElementById('score');
const nameValue = document.getElementById('logout-button').value;

let amount = 0; // this pointer to track score of current movie-session

// localStorage.setItem(score, scoreBoard.innerHTML);

let userID = localStorage.getItem('userID');

/**
 * @param {int} amount
 */

const handleScoreIncrease = (amount) => {
    localScore = scoreBoard.innerHTML;
    localScore = parseInt(localScore);
    localScore += amount;
    scoreBoard.innerHTML = localScore;
    $.ajax({
        type: 'PATCH',
        url: `http://localhost:3000/users/${userID}`,
        data: {
            score: localScore
        }, success: () => {
            console.log("score sent to db");
        }, error: (err) => {
            console.log(err);
        }
    })
}

//? why do we loose the authentication here but not when user is wrong.
// well the server restarts on correct answer and thats bc there is a change to the db.json file. and thats because of nodemon? after the patch request


$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/users?name=${nameValue}`,
        success: (response) => {
            // console.log(response[0].score);
            scoreBoard.innerHTML = response[0].score;
            localStorage.setItem("userID", response[0].id);
        },
        error: (err) => {
            console.log(err);
        }
    });
});


