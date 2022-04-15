// this file is to keep track of the score of the user
const scoreBoard = document.getElementById('score');

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/users?name=shelby',
        success: (response) => {
            // console.log(response[0].score);
            scoreBoard.innerHTML = response[0].score;
        },
        error: (err) => {
            console.log(err);
        }
    });
});

// let amount = 0; // this pointer to track score of current movie-session

// // let localScore;
// //  = localStorage.getItem('score');



// const getUserScore = async () => {
//     // send get request to db.json to get user score using ajax
//     // return user score
//     const localScore = await $.ajax({
//         url: 'http://localhost:3000/users?name=shelby',
//         type: 'GET',
//         success: (data) => {
//             localScore = data.score;
//             console.log(localScore);
//         }, error: (err) => {
//             console.log(err);
//         }
//     });
// }

// console.log(localScore);
// // if (localScore === null) {
// //     localScore = 0;
// //     localStorage.setItem('score', localScore);
// // }


// /**
//  * @param {int} amount
//  */

// const handleScoreIncrease = (amount) => {
//     localScore = parseInt(localScore);
//     localScore += amount;
//     localStorage.setItem('score', localScore);
// }


// const scoreBoard = document.getElementById('score');

// // propogate the scoreboard
// getUserScore();
// scoreBoard.innerHTML = localScore;