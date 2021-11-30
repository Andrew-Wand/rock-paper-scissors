const gameBtn = document.querySelectorAll('input');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');



let playerScore = 0;
let computerScore = 0;






//Plays single round of RPS
function playRound(playerSelection) {
    let computerSelection = computerPlay(); 
    let result = '';

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
     (playerSelection == 'paper' && computerSelection == 'rock') ||
     (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1
        result = (playerSelection + ' beats ' + computerSelection + '!' + ' You won! ' + "<br><br> Player score: " + playerScore + "<br> Computer score: " + computerScore);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
        }
    }

    else if (playerSelection == computerSelection) {
        result = (' It\'s a tie! ' + ' You both chose ' + playerSelection + "<br><br> Player score: " + playerScore + "<br> Computer score: " + computerScore)
    }
    
    else {
        computerScore += 1
        result = (computerSelection + ' beats ' + playerSelection + '!' + ' You lose! ' + "<br><br> Player score: " + playerScore + "<br> Computer score: " + computerScore);

        if (computerScore == 5) {
            result += '<br><br>The computer won the game! Reload the page to play again'
        }
    }



    document.getElementById('results').innerHTML = result
    return
    
}


// Pick random word (Rock, Paper, Scissors)
function computerPlay() {
    let gameArray = ['rock', 'paper', 'scissors'];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}


gameBtn.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    });
});


















