/*generate a random choice for the computer*/      
function getComputerChoice() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerChoice;
}

/*prompt the player to make a choice*/
function playerSelectionPrompt() {
  let playerPrompt = prompt("Please choose Rock, Paper, or Scissors")
  selectionFirstLetter = playerPrompt.slice(0, 1);
  selectionRest = playerPrompt.slice(1);
  return selectionFirstLetter.toUpperCase() + selectionRest.toLowerCase();
}

/*play a single round of rock paper scissors and return the result of the round*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose. Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a tie! You both chose rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose. Scissors beat Paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a tie! You both chose Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beat Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose. Rock beats Scissors.";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return "It's a tie! You both chose Scissors.";
  }
}

