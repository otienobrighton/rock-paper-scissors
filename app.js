const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

//getting and displaying user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id; // Assign value to the global variable
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}))

//generating computer choice
function generateComputerChoice(){
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    if(randomNumber === 1){
        computerChoice = 'rock';
    }else if(randomNumber === 2){
        computerChoice = 'paper';
    }else if(randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    getResult(); // Call getResult() after setting computerChoice
}

//checking for the results
function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw";
    }else if(computerChoice === 'rock' && userChoice === 'paper' ){
        result = 'you win';
    }else if(computerChoice === 'rock' && userChoice === 'scissors' ){
        result = 'you lost';
    }else if(computerChoice === 'paper' && userChoice === 'scissors' ){
        result = 'you win';
    }else if(computerChoice === 'paper' && userChoice === 'rock' ){
        result = 'you lost';
    }else if(computerChoice === 'scissors' && userChoice === 'rock' ){
        result = 'you win';
    }else if(computerChoice === 'scissors' && userChoice === 'paper' ){
        result = 'you lost';
    }
    resultDisplay.innerHTML = result;
}
