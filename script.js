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

/*note, the test from step 5 doesn't work but console.log(playRound(playerSelectionPrompt(), getComputerChoice())); does work?*/

/*playRound(playerSelectionPrompt(), getComputerChoice()); this will run the game, but not display the win/lose/tie result unless you wrap it in a console.log. However, if I run that without the console.log in the actual browser console, then it will show the win/lose/tie result. Not sure why there's a difference?*/

/*play an entire 5 round game, then return the overall win/lose/tie result*/
let result;
      
function game() {
  for (let start = 0; start < 5; start++) {
  result = playRound(playerSelectionPrompt(), getComputerChoice());
  console.log(result);
  keepScore();
  }
  console.log(gameResult());
}

/*keep track of players' scores after each round*/
let playerScore = 0;
let computerScore = 0;
     
function keepScore() {
  if (result === "You win! Rock beats Scissors." || result === "You win! Paper beats Rock." || result === "You win! Scissors beat Paper.") {
    playerScore = playerScore +1;
  } else if (result === "You lose. Paper beats Rock." || result === "You lose. Scissors beat Paper." || result === "You lose. Rock beats Scissors.") {
    computerScore = computerScore +1;
  } else if (result === "It's a tie! You both chose rock." || result === "It's a tie! You both chose Paper." || result === "It's a tie! You both chose Scissors.") {
    playerScore = playerScore +1;
    computerScore = computerScore +1;
  }
} 

/*calculate the results after all 5 rounds are finished*/
function gameResult() {
  if (playerScore > computerScore) {
    return "Game result: you win!";
  } else if (computerScore > playerScore) {
    return "Game result: you lose.";
  } else if (playerScore === computerScore) {
    return "Game result: it's a tie!";
  }
}

game();
