const CHOICES = ["rock", "paper", "scissors"];
const WINLOSS = {
    "paper": "rock",
    "rock": "scissors",
    "scissors": "paper"
}
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const results = document.createElement("div");
const body = document.querySelector("body");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
body.append(rockButton, paperButton, scissorsButton, results);

const buttons = document.querySelectorAll("button");

let playerScore = 0;
let compScore = 0;
let isGameOver = false;

function getRandComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    return CHOICES[compChoice];
}

function playRound(playerChoice, compChoice) {
    if (playerChoice.toLowerCase() === compChoice) {
        return `It's a tie! You chose ${playerChoice} and the computer chose ${compChoice}.`;
    }
    for (const key in WINLOSS) {
        if (playerChoice.toLowerCase() === key &&
            compChoice === WINLOSS[key]) {
            return `${playerChoice} beats ${compChoice}.`;
        }
        if (compChoice === key &&
            playerChoice.toLowerCase() === WINLOSS[key]) {
            return `${playerChoice} loses to ${compChoice}.`;
        }
    }
}

function outputResult(result) {
    results.textContent = result;
}

buttons.forEach(button => button.addEventListener("click", () => { let result = playRound(button.textContent, getRandComputerChoice());    
    if (isGameOver) {
        return;
    }
    if (result.includes("beats")) {
        playerScore++;
    } else if (result.includes("loses")) {
        compScore++;
    }
    if (playerScore === 5) {
        outputResult(`You won the game!    Player: ${playerScore} | Computer ${compScore}`);
        isGameOver = true;
    } else if (compScore === 5) {
        outputResult(`You lost the game.    Player: ${playerScore} | Computer ${compScore}`);
        isGameOver = true;
    } else {
        result += `Player: ${playerScore} | Computer ${compScore}`;
        outputResult(result);
    }
})); 
