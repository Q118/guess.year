console.log("at js guessForm file");

const titleInput = document.getElementById('guess-title');
const yearInput = document.getElementById('guess-year');

const titleSubmit = document.getElementById('title-submit');
const yearSubmit = document.getElementById('year-submit');



titleSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(titleInput.value);
    $.ajax({
        url: '/guess',
        type: 'POST',
        contentType: "application/x-www-form-urlencoded",
        data: {
            guess: titleInput.value
        }, success: function (data) {
            console.log(data);
        }, error: function (err) {
            console.log(err);
        }
    })
});

yearSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(yearInput.value);
});


