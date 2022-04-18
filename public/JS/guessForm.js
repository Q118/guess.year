console.log("at js guessForm file");

const titleInput = document.getElementById('guess-title');
// const yearInput = document.getElementById('guess-year');
const titleSubmit = document.getElementById('title-submit');
// const yearSubmit = document.getElementById('year-submit');
const titleAnswer = document.getElementById('reveal-button').value;



titleSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(titleAnswer); //debug
    $.ajax({
        type: 'POST', // leave contentType at default
        url: '/guess',
        data: {
            guess: titleInput.value,
            trueAnswer: titleAnswer
        }, success: () => {
            console.log("data sent to server side");
        }, error: (err) => {
            console.log(err);
        }
    }).then((response) => {
        //console.log(response);
        if (response.output === 'Correct') {
            console.log("correct");
            handleScoreIncrease(amount);
            Swal.fire({
                icon: 'success',
                title: `Thats right! ${amount} points awarded.`,
                focusConfirm: true,
                confirmButtonText:
                    'Keep Playing',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(); 
            // problem here is the reloading logs out the user. fix this. maybe i just need a function to bring in a new movie and not reload the page.
                }
            })
        } else {
            console.log("wrong");
            Swal.fire({
                icon: 'error',
                title: 'Incorrect guess, try again!',
                text: `The correct answer was ${titleAnswer}`,
                focusConfirm: true,
                confirmButtonText:
                    'Play Again',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            })
        }
    });
});
