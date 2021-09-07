//prompt player choose a letter
//set letter to guess
//loop until all letters are quessed
//if incorrect quesses are > 5 player loses
//if quess is correct continue allowing quesses

const buttons = document.querySelectorAll('qwerty');
const phrase = document.querySelector('phrase');
const startGame = document.getElementsByClassName('.btn_reset');
const overlay = document.getElementById('overlay');

const missed = 0;

startGame.addEventListener('click', (e) => {
    overlay.style.display = "none";
});

phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];

function getRandomPhraseAsArray(){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
};

function addPhraseToDisplay (){

    
}