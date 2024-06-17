let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose rock, paper or scissors");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
}

game();

console.log(`The score is ${humanScore} - ${computerScore}`);
