const CHOICES = ["Rock", "Paper", "Scissors"];

function getRandComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3);
  return CHOICES[compChoice];
}

