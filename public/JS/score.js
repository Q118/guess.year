// this file is to keep track of the score of the user
const scoreBoard = document.getElementById('score');
const nameValue = document.getElementById('logout-button').value;

// let amount = 0; // this pointer to track score of current movie-session

// localStorage.setItem(score, scoreBoard.innerHTML);

//! just redo this whole logic, differently

let userID = localStorage.getItem('userID');

/**
 * @param {int} amount
 */

const handleScoreIncrease = async (amount) => {
    let localScore = parseInt(scoreBoard.innerHTML);
    localScore += amount;
    console.log(`localScore at increase func before try: ${localScore}`);
    try {
        $.ajax({
            type: 'PATCH',
            url: `http://localhost:3000/users/${userID}`,
            data: {
                score: localScore
            }, success: () => {
                console.log("score sent to db");
                console.log(`localScore in try: ${localScore}`);
                scoreBoard.innerHTML = localScore;
            }, error: (err) => {
                console.log(err);
            }
        })
    } catch (error) {
        console.log(error);
    }
}


$(document).ready( async () => {

// okay whats happening is that when the page loads, the score is set to the value of the score in the db and like when its a new user, that is at zero and if its the first question they get correct, then the score stays at zero instead of changing because the score is set to zero in the db.

    await $.ajax({
        type: 'GET',
        url: `http://localhost:3000/users?name=${nameValue}`
    }).then(async (response) => {
        console.log(response);
        scoreBoard.innerHTML = response[0].score;
        localStorage.setItem("userID", response[0].id);
    }).catch((err) => {
        console.log(err);
    });
});


