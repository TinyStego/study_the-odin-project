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

function getRandComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    return CHOICES[compChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose: Rock, Paper, Scissors");
    while (!CHOICES.includes(playerChoice.toLowerCase())) {
        playerChoice = prompt(`${playerChoice} is invalid.\nChoose: Rock, Paper, Scissors`);
    }
    return playerChoice;
}

function playRound(playerChoice, compChoice) {
    if (playerChoice.toLowerCase() === compChoice) {
        return `It's a tie! You chose ${playerChoice} and the computer chose ${compChoice}.`;
    }

    for (const key in WINLOSS) {
        if (playerChoice.toLowerCase() === key &&
            compChoice === WINLOSS[key]) {
            return `You Win! ${playerChoice} beats ${compChoice}.`;
        }
        if (compChoice === key &&
            playerChoice.toLowerCase() === WINLOSS[key]) {
            return `You Lose! ${playerChoice} loses to ${compChoice}.`;
        }
    }

}

function outputResult(result) {
    results.textContent = result;
}

function getGameResult(playerScore, compScore) {
    if (playerScore > compScore) {
        return "won";
    }
    if (playerScore < compScore) {
        return "lost";
    }
    if (playerScore === compScore) {
        return "tied";
    }
}
