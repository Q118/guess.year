// this file is to keep track of the score of the user
// first it checks if there is localStorage set with a score already
// if there is, it will retrieve the score and display it
// if there is not, it will set the score to 0 and display it
// if the user submits a correct anser, it will add 5 to the score
// depending on how many clips have been loaded, it will add more points
let amount = 0;

let localScore = localStorage.getItem('score');
console.log(localScore);
if (localScore === null) {
    localScore = 0;
    localStorage.setItem('score', localScore);
}


/**
 * 
 * @param {int} amount 
 */

const handleScoreIncrease = (amount) => {
    localScore = parseInt(localScore);
    localScore += amount;
    localStorage.setItem('score', localScore);
}


//let amount start at 0 and if first clicked then -2 and second click -3...
//if third click then -4 and so on
//todo: dont allow others to be clicked until the one before it is clicked