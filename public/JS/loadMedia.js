console.log("at js loadMedia file");

const revealButton = document.getElementById('reveal-button');
const answerSection = document.getElementById('answer-div');

const startHardButton = document.getElementById('start-hard');
const hardSection = document.querySelector('.hardSection');
const mediumStartButton = document.getElementById('start-medium');
const mediumSection = document.querySelector('.mediumSection');
const easyStartButton = document.getElementById('start-easy');
const easySection = document.querySelector('.easySection');

let buttonArr = [startHardButton, mediumStartButton, easyStartButton];

answerSection.style.display = 'none';
hardSection.style.display = 'none';
mediumSection.style.display = 'none';
easySection.style.display = 'none';

buttonArr.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.value);
        const section = document.querySelector(`.${button.value}`);
        section.style.display = 'block';
        const playMe = document.getElementById(`${button.value}`);
        playMe.play();
    });
});

revealButton.addEventListener('click', () => {
    answerSection.style.display = 'block';
    revealButton.style.display = 'none';
});