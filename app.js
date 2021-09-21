// get needed elements from html

let buttons = document.querySelectorAll('#qwerty');
let phrase = document.getElementById('phrase');
let startGame = document.querySelector('.btn_reset');
let overlay = document.getElementById('overlay');



let missed = 0;
// created phrases to quess
const phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];

// created event listner to start the game and show overlay screen
overlay.addEventListener('click', () => {
    missed = 0;
    overlay.style.display = "none";
    });

//console.log(phrases); testing phrases are showing
//created function to get a random phrase and break it into individual letters
function getRandomPhraseAsArray () {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    let randomPhrase = phrases[randomIndex];
    let split = randomPhrase.split('');
    return split;
    
 }
 const randomPhrase = getRandomPhraseAsArray();


 //testing for random word 

//console.log(getRandomPhraseAsArray())
//created a function to dsiplay empty boxes to quess letters
 function addPhraseToDisplay(randomPhrase){
    for (let i = 0; i < randomPhrase.length; i++) {
        let li = document.createElement("LI");
        let ul = document.querySelector('ul');

        li.textContent = randomPhrase[i];
        ul.appendChild(li);

        if(randomPhrase[i] != ' '){
            li.classList.add('letter')
            }else{
                li.classList.add('space');
            }
    }

 };
 addPhraseToDisplay(randomPhrase); 

//checking letters to see if they are in the random phrase 



//activating keyboard on screen to reconized when clicked

