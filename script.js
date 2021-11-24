

let roundWinner = '';
let playerScore = 0;
let computerScore = 0;



let computerSelection = computerPlay();
let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();


//Plays single round of RPS
function playRound(playerSelection, computerSelection) {
    // let playerSelection = 'ROCK';
    // computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
     (playerSelection === 'paper' && computerSelection === 'rock') ||
     (playerSelection === 'scissors' && computerSelection === 'paper')) 
     {
        playerScore++
        roundWinner = 'player'
    }
    
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
     (computerSelection === 'paper' && playerSelection === 'rock') ||
     (computerSelection === 'scissors' && playerSelection === 'paper')) 
     {
        computerScore++
        roundWinner = 'computer'
    }

    if (playerSelection === '') {
        alert('Enter a choice!');
    }


    updateScore();
    console.log(playerScore);
    console.log(computerScore);
    
}

function restartInitial() {
    
}








function updateScore() {
    if (roundWinner === 'tie') {
        console.log("It's a tie!");
    } else if (roundWinner === 'player'){
        console.log("Player wins!");
    } else if (roundWinner === 'computer') {
        console.log("Computer wins!");
    }
    window.location.reload();
}










// Pick random word (Rock, Paper, Scissors)
function computerPlay() {
    let gameArray = ['ROCK', 'PAPER', 'SCISSORS'];

    let gamePick = gameArray[Math.floor(Math.random() * gameArray.length)];
    return gamePick.toLowerCase();
    
}



console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection, computerSelection);














