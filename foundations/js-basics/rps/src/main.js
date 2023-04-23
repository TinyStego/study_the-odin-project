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
  for (const key in WINLOSS) {
    if(playerChoice.toLowerCase() === key &&
       compChoice === WINLOSS[key]) {
      return `You Win! ${playerChoice} beats ${compChoice}.`;
    }
    if(compChoice === key &&
       playerChoice.toLowerCase() === WINLOSS[key]) {
      return `You Lose! ${playerChoice} loses to ${compChoice}.`;
    }
  }

  return `It's a tie! You chose ${playerChoice} and the computer chose ${compChoice}.`;
}

function game(){
  const rounds = 5;
  for(let i = 0; i < rounds; ++i){
    let playerChoice = prompt("Choose: Rock, Paper, Scissors");
    while(!CHOICES.includes(playerChoice.toLowerCase())) {
      playerChoice = prompt(`${playerChoice} is invalid.\nChoose: Rock, Paper, Scissors`);
    }

    const compChoice = getRandComputerChoice();
    console.log(playRound(playerChoice, compChoice));
  } 
}
