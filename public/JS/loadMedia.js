console.log("at js loadMedia file");

const startHardButton = document.getElementById('start-hard');
const hardSection = document.querySelector('.hardSection');
const mediumStartButton = document.getElementById('start-medium');
const mediumSection = document.querySelector('.mediumSection');
const easyStartButton = document.getElementById('start-easy');
const easySection = document.querySelector('.easySection');

let buttonArr = [startHardButton, mediumStartButton,easyStartButton];

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