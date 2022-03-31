// get needed elements from html

const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn_reset');
const qwerty = document.getElementById('qwerty').querySelectorAll('button');
const overlay = document.getElementById('overlay');

//missed counter
let missed = 0;

// created phrases to quess
const phrases = ['Smooth Criminal', 
          'Kim Possible',
          'Zero to Hero',
          'Headstrong'];


// created event listner to start the game and show overlay screen
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    });

//console.log(phrases); testing phrases are showing

//function to get a random phrase and break it into individual letters
function getRandomPhraseAsArray () {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    let randomPhrase = phrases[randomIndex];
    let split = randomPhrase.split('');
    return split;
    
 }
 const randomPhrase = getRandomPhraseAsArray();


 //testing for random word 
//console.log(getRandomPhraseAsArray())

//function to display empty boxes to quess letters
 function addPhraseToDisplay(randomPhrase){
    for (let i = 0; i < randomPhrase.length; i++) {
        let li = document.createElement('LI');
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

function checkLetter (buttons) {
    const allLetters = document.getElementsByClassName('letter')
    let match = null;
 
    for (let i = 0; i < li.length; i++) {
        let matchedLeter = li[i];
        
    
    if (matchedLetter.textContent === buttons) {
        li[i].classList.add('show');
        match += button;
        match.textContent = "show";
   
        } else {};

    }
    return match;
};

// activate buttons



//activating keyboard on screen to reconized when clicked


qwerty.addEventListener('click', (e) =>{
   
    //let checkLetter = checkLetter(buttons);

    //if letter is incorrect

})

function checkWin(){
    let letter = document.getElementsByClassName('letter')
    let show = document.getElementsByClassName('show')

    if (letter.lenght === show.lenght){
        overlay.className = 'win';
        overlay.innerText = 'YAY! You Guessed it!';
        overlay.style.display = 'flex';
        overlay.append(startGame);
    }else if (missed > 4){
        overlay.className = 'lose';
        overlay.innerText = 'Sorry! Try Again!'
        overlay.style.display = 'flex';
        overlay.append(startGame);
    };
        
}

