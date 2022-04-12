// this file is to keep track of the score of the user

let amount = 0;

let localScore = localStorage.getItem('score');
console.log(localScore);
if (localScore === null) {
    localScore = 0;
    localStorage.setItem('score', localScore);
}


/**
 * @param {int} amount 
 */

const handleScoreIncrease = (amount) => {
    localScore = parseInt(localScore);
    localScore += amount;
    localStorage.setItem('score', localScore);
}


const scoreBoard = document.getElementById('score');

// propogate the scoreboard
scoreBoard.innerHTML = localScore;