console.log("at javascipt main file");

const startSongButton = document.getElementById('start-song');
const songSection = document.querySelector('.songSection');
//songSection hidden on page load
songSection.style.display = 'none';

startSongButton.addEventListener('click', () => {
    console.log("start song button clicked");
    songSection.style.display = 'block';
    const song = document.getElementById('song');
    song.play();
});