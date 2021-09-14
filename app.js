//prompt player choose a letter
//set letter to guess
//loop until all letters are quessed
//if incorrect quesses are > 5 player loses
//if quess is correct continue allowing quesses

const buttons = document.querySelectorAll('#qwerty');
const phrase = document.querySelector('#phrase');
const startGame = document.querySelector('.btn_reset');
const overlay = document.querySelector('#overlay');
const phraseArray = getRandomPhraseAsArray(arr);

const missed = 0;

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];

function getRandomPhraseAsArray(arr){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomArray = randomPhrase.split(' ');
    return randomArray;
    
}

console.log(getRandomPhraseAsArray);

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (phraseArray){
    phrase.forEach(e) => {
        const character = document.querySelector('input')
        const newItem = document.querySelector('#phase ul');
        
        newItem.insertAdjacentHTML(
            'afterbegin',
            `<li>${character.value}</li>`
        );
    });


