console.log("at js guessForm file");

const titleInput = document.getElementById('guess-title');
const yearInput = document.getElementById('guess-year');

const titleSubmit = document.getElementById('title-submit');
const yearSubmit = document.getElementById('year-submit');

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
        console.log(response);
    });
});

yearSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(yearInput.value);
});


