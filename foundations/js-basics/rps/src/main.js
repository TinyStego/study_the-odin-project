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
// REMINDER:
//     refactor this function, possibly split into multiple functions
function game(){
  const rounds = 5;

  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < rounds; ++i){
    let playerChoice = prompt("Choose: Rock, Paper, Scissors");
    while (!CHOICES.includes(playerChoice.toLowerCase())) {
      playerChoice = prompt(`${playerChoice} is invalid.\nChoose: Rock, Paper, Scissors`);
    }
    const compChoice = getRandComputerChoice(); // determine this score later so player
                                                // can't view it in the debugger
    const result = playRound(playerChoice, compChoice);
    if (result.includes("Win")) {
      ++playerScore;
    }
    if (result.includes("Lose")) {
      ++compScore;
    }
    console.log(result);
  } 

  if (playerScore > compScore) {
    return `You win the game! ${playerScore} to ${compScore}`;
  }
  if (playerScore < compScore) {
    return `You lost the game! ${playerScore} to ${compScore}`;
  }
  if (playerScore === compScore) {
    return `You tied the game! ${playerScore} to ${compScore}`;
  }
}
