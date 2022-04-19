// this file is to keep track of the score of the user
const scoreBoard = document.getElementById('score');
const nameValue = document.getElementById('logout-button').value;

// it changes at first but reload sends it back to original score bc the app.get/ is resending the same info? .. look at getUsers


// let userID = localStorage.getItem('userID');

/**
 * @param {int} amount
 */

const handleScoreIncrease = async (amount) => {
    let userID = localStorage.getItem('userID');
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
    console.log(`localScore at increase func AFTER catch: ${localScore}`);
    scoreBoard.innerHTML = localScore;
    return localScore;
}


$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/users?name=${nameValue}`
    }).then(async (response) => {
        console.log(response);
        if(typeof localScore === "undefined" || localScore < response[0].score) {
            scoreBoard.innerHTML = response[0].score;
        } // else will set it to localScore from increase func
        localStorage.setItem("userID", response[0].id);
    }).catch((err) => {
        console.log(err);
    });
});


