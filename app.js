//prompt player choose a letter
//set letter to guess
//loop until all letters are quessed
//if incorrect quesses are > 5 player loses
//if quess is correct continue allowing quesses

const buttons = document.querySelectorAll('#qwerty');
const phrase = document.querySelector('#phrase');
const startGame = document.querySelector('.btn_reset');
const overlay = document.querySelector('#overlay');
const phraseArray = getRandomPhraseAsArray(phrases);

const missed = 0;

overlay.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
});

const phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];

//console.log(phrases); testing phrases are showing

 function getRandomPhraseAsArray(phrases){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const split = randomPhrase.split(phrases);
    return split;
    
};
 console.log(getRandomPhraseAsArray); //testing random word is chosen

// getRandomPhraseAsArray(phrases);



