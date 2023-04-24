const CHOICES = ["rock", "paper", "scissors"];
const WINLOSS = {
  "paper": "rock",
  "rock": "scissors",
  "scissors": "paper"
}

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
  console.log(result);
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

function game() {
  const rounds = 5;

  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < rounds; ++i){
    let playerChoice = getPlayerChoice();
    const compChoice = getRandComputerChoice(); // determine this score later so player
                                                // can't view it in the debugger
    const result = playRound(playerChoice, compChoice);
    if (result.includes("Win")) {
      ++playerScore;
    }
    if (result.includes("Lose")) {
      ++compScore;
    }
    outputResult(result);
  } 

  const gameResult = getGameResult(playerScore, compScore);
  return `You ${gameResult}! ${playerScore} to ${compScore}.`;
}
