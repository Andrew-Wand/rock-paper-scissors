const gameBtn = document.querySelectorAll('input')
const results = document.getElementById('results');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const restartGameBtn = document.getElementById('restartGame');

function gameEnd() {
    gameBtn.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
            
            results.innerHTML = `<h3>${playerSelection} beats ${computerSelection}!</h3>`
            playerScore.innerHTML++

            if (pScore.innerHTML == 5) {
                alert('You win! :D');
                gameEnd();
            }
    
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors') {
        
        results.innerHTML = `<h3>${computerSelection} beats ${playerSelection}!</h3>`
        computerScore.innerHTML++


        if (cScore.innerHTML == 5) {
            alert('You lose! :(');
            gameEnd();
        }
        
    } else {
        results.innerHTML = `<h3>${playerSelection} and ${computerSelection} are the same! You tie!</h3>`
    }


}


function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}



restartGameBtn.addEventListener('click', function() {
    location.reload();
    return false;
})


gameBtn.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})















