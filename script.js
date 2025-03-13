// declare a computer score and default it as 0
let computerScore = 0;

// declare a human score and default it as 0
let gamerScore = 0;

let executed = false;

// delcare DOM opject
const container = document.querySelector('body');
const rockButton = document.querySelector('button.rock');
const paperButton = document.querySelector('button.paper');
const scissorsButton = document.querySelector('button.scissors');

// add event listener to the buttons
rockButton.addEventListener('click', function() {
    [computerScore, gamerScore] = playRound('rock', computerScore, gamerScore);
    console.log(computerScore)
});
paperButton.addEventListener('click', function() {
    [computerScore, gamerScore] = playRound('paper', computerScore, gamerScore);
});
scissorsButton.addEventListener('click', function() {
    [computerScore, gamerScore] = playRound('scissors', computerScore, gamerScore);
});




// -----------------------------------------------------------

function playRound(gamerChoice, computerScore, gamerScore) {
    // let computer make a rondom choice
    let random = createRandom();

    // turn it into either one out of three
    let computerChoice = createComputerChoice(random);

    // compare it with computer choice
    let winner = getWinner(computerChoice, gamerChoice);
    console.log(winner);
    // add point to whoever win
    computerScore = addPointToComputer (winner, computerScore);
    gamerScore = addPointToGamer (winner, gamerScore);

    // tell gamer the result of this round
    printResult (winner, computerScore, gamerScore);

    //print the result if any player reach 5 point
    printFinalWinner (computerScore, gamerScore, winner);

    return [computerScore, gamerScore];
}

function createRandom () {
    let random = Math.random();
    return random;
}

function createComputerChoice (random) {
    let computerChoice = 
    (random < 0.333) ? 'rock' :
    (random >=0.333 && random <=0.666) ? 'paper':
    'scissors';
    return computerChoice;
}

function getGamerChoice () {
    let result = false;
    while (result != true) {
        let gamerChoice = prompt('What is your choice? Rock Paper or Scissors?');
        gamerChoice = gamerChoice.toLowerCase();
        if (gamerChoice == 'paper' || gamerChoice == 'rock' || gamerChoice == 'scissors') {
            result = true;
            return gamerChoice
        } else {
            console.log('Your input is not valid, please enter one more time');
        }
    }   
    return gamerChoice;
}

function getWinner (computerChoice, gamerChoice) {
    let winner =
    (computerChoice == 'rock' && gamerChoice == 'scissors') ? 'computer' :
    (computerChoice == 'paper' && gamerChoice == 'scissors') ? 'gamer' :
    (computerChoice == 'paper' && gamerChoice == 'rock') ? 'computer' :
    (computerChoice == 'scissors' && gamerChoice == 'rock') ? 'gamer' :
    (computerChoice == 'scissors' && gamerChoice == 'paper') ? 'computer' :
    (computerChoice == 'rock' && gamerChoice == 'paper') ? 'gamer' :
    'draw';
    return winner;
}

function addPointToComputer (winner, computerScore) {
    if (winner == 'computer'){
        computerScore++;
    }
    return computerScore;
}

function addPointToGamer (winner, gamerScore) {
    if (winner == 'gamer'){
        gamerScore++;
    }
    return gamerScore;
}

function printResult (winner, computerScore, gamerScore) {
    const endMessage = document.createElement('div');

    if (winner != 'draw'){
        const str = ['The winner of this round is ', winner , ', the current point of each player is \nComputer = ',computerScore, '\nGamer = ', gamerScore].join(' ');
        endMessage.textContent = str;
        container.appendChild(endMessage);
    } else {
        const str = ['The result of this round is draw, the current point of each player is \nComputer = ', computerScore, '\nGamer = ', gamerScore].join(' ');
        endMessage.textContent = str;
        container.appendChild(endMessage);
    }

}

function  printFinalWinner (computerScore, gamerScore, winner) {
    if (executed != true) {
        if (computerScore == 5 || gamerScore == 5) {
            const finalWinner = document.createElement('div')
            const str = ['The final winner is ', winner].join(' ');
            finalWinner.textContent = str;
            container.appendChild(finalWinner);
            executed = true;
        }
    }
}



