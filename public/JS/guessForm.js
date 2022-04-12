console.log("at js guessForm file");

const titleInput = document.getElementById('guess-title');
const yearInput = document.getElementById('guess-year');

const titleSubmit = document.getElementById('title-submit');
const yearSubmit = document.getElementById('year-submit');

/**
 * @description - This function is called when the user clicks the submit button for the title.
 */

titleSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(typeof titleInput.value); //debug
    $.ajax({
        type: 'POST', // leave contentType at default
        url: '/guess',
        data: {
            guess: titleInput.value
        }, success: () => {
            console.log("data sent to server side");
        }, error: (err) => {
            console.log(err);
        }
    })
});

yearSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(yearInput.value);
});


