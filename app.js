//prompt player choose a letter
//set letter to guess
//loop until all letters are quessed
//if incorrect quesses are > 5 player loses
//if quess is correct continue allowing quesses

const buttons = document.querySelectorAll('#qwerty');
const phrase = document.querySelector('#phrase');
const startGame = document.querySelector('.btn_reset');
const overlay = document.querySelector('#overlay');

let missed = 0;

const phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];
          
overlay.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
});



//console.log(phrases); testing phrases are showing

 function getRandomPhraseAsArray (phrases) {

    let randomPhrase = Math.floor(Math.random() * phrases.lenght);
    let split = randomPhrase.split('');
    return split;
    
};
 console.log(getRandomPhraseAsArray); //testing random word is chosen

// getRandomPhraseAsArray(phrases);



