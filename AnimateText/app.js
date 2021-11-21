//Spooky Information
const spookyAudio = document.querySelector('.spooky-sound')
const spookyPicture = document.querySelector('.spooky-picture')

//Motivatio Area
const almostThere = document.querySelector('.almost-there');

//UI Messages
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');

//Clickble
const nextButton = document.querySelector('.btn');

//SVG Mazes
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');

const collusionCheck = (value) => {
    if(value === 'maze-border') alert('you lost, try again!');
    if(value === 'finish') {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = 'all';
        levelOne.style.display = 'none';
        almostThere.style.display = 'initial'
    }
    if(value === 'end-game') {
        spookyPicture.style.display = 'block';
        spookyAudio.play()
    }
}

nextButton.onclick = () => {
    levelTwo.style.display = 'initial';
    almostThere.style.display = 'none'
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = 'none';
    uiLevel.innerHTML = "Level 2";
    uiMessage.innerHTML = "Naruto would Never give up";
    document.body.style.background = 'block'
}

window.addEventListener('mousemove', (e) => {
    let check = e.target.classList.value;
    collusionCheck(check)
});
