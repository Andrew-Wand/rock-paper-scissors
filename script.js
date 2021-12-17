const gameBtn = document.querySelectorAll('input')
const results = document.getElementById('results');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const restartGameBtn = document.getElementById('restartGame');

function gameEnd() {
    gameBtn.forEach(elem => {
        elem.disabled = true
    });
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock') {
            
            results.innerHTML = `<h3 style="color:#0DCEDA">${playerSelection}&nbsp</h3><h3> beats</h3> <h3 style="color:#F73859">&nbsp${computerSelection}!</h3?>`
            playerScore.innerHTML++

            if (pScore.innerHTML == 5) {
                alert('You win! :D');
                gameEnd();
            }
    
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ||
    playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors') {
        
        results.innerHTML = `<h3 style="color:#0DCEDA">${computerSelection}&nbsp</h3> <h3> beats</h3> <h3 style="color:#F73859">&nbsp${playerSelection}!</h3?>`
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
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
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















