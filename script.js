// declare a computer score and default it as 0
let computerScore = 0

// declare a human score and default it as 0
let gamerScore = 0

// loop the following code five times
for (let i = 0; i < 5; i++) {

    // let computer make a rondom choice
    let random = createRandom()

    // turn it into either one out of three
    let computerChoice = createComputerChoice(random)
    console.log(computerChoice);

    // ask for gamer choice
    let gamerChoice = getGamerChoice()

    // compare it with computer choice
    let winner = getWinner(computerChoice, gamerChoice)

    // add point to whoever win
    computerScore = addPointToComputer (winner, computerScore)
    gamerScore = addPointToGamer (winner, gamerScore)

    // tell gamer the result of this round
    printResult (winner, computerScore, gamerScore)
}
// print the end message
console.log(createEndMessage (computerScore, gamerScore));
// let message = createEndMessage (computerScore, gamerScore);
// console.log(message);


// -----------------------------------------------------------
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
        if (gamerChoice == 'paper' || gamerChoice == 'rock' || gamerChoice == "scissors") {
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
    if (winner != 'draw'){
        console.log('The winner of this round is ',winner, ', the current point of each player is \nComputer = ',computerScore, '\nGamer = ', gamerScore);
    } else {
        console.log('The result of this round is draw, the current point of each player is \nComputer = ', computerScore, '\nGamer = ', gamerScore);
    }
}

function createEndMessage (computerScore, gamerScore) {
    let message = 
    (gamerScore > computerScore) ? 'End of the game! The winner is gamer! Congratualations!' :
    (computerScore > gamerScore) ? 'End of the game! The winner is computer.' :
    'End of the game! The result is draw';
    return message;
}





