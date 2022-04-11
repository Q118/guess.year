console.log("at javascipt main file");

const startSongButton = document.getElementById('start-song');
const songSection = document.querySelector('.songSection');
const movieStartButton = document.getElementById('start-movie');
const adStartButton = document.getElementById('start-ad');
const movieSection = document.querySelector('.movieSection');
const startNewsButton = document.getElementById('start-news');
const newsSection = document.querySelector('.newsSection');
const adSection = document.querySelector('.adSection');

let buttonArr = [startSongButton, movieStartButton, adStartButton, startNewsButton];

songSection.style.display = 'none';
movieSection.style.display = 'none';
newsSection.style.display = 'none';
adSection.style.display = 'none';

const playIt = (button, section) => {
    console.log(`${button.value} clicked`);
    section.style.display = 'block';
    const playMe = document.getElementById(`${button.value}`);
    playMe.play();
}

buttonArr.forEach(button => {
    button.addEventListener('click', () => {
        playIt(button, button.value === 'song' ? songSection : button.value === 'movie' ? movieSection : button.value === 'news' ? newsSection : adSection);
    });
});