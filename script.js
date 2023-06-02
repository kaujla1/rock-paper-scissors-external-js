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

/*Connect to body div*/
const body = document.querySelector('body');

/*Connect to choices div*/
const choiceDiv = document.querySelector(".choices");

/*Create DOM results div*/
const resultsDiv = document.createElement("div");
resultsDiv.classList.add("results");
body.insertBefore(resultsDiv, choiceDiv); //CHANGE THIS when you're finishing so that the resultsDiv is appended somewhere else, not at the bottom of body. You might have to connect to another element to use it as a reference point. 

/*play a single round of rock paper scissors and return the result of the round*/
let result;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    result = "You win! Rock beats Scissors.";
    resultsDiv.textContent = result; /*not sure if I need a return before all of these?*/
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    result = "You lose. Paper beats Rock.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    result = "It's a tie! You both chose rock.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    result = "You win! Paper beats Rock.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    result = "You lose. Scissors beat Paper.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    result = "It's a tie! You both chose Paper.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    result = "You win! Scissors beat Paper.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    result = "You lose. Rock beats Scissors.";
    resultsDiv.textContent = result;
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    result = "It's a tie! You both chose Scissors.";
    resultsDiv.textContent = result;
  }
  keepScore();
  calculateGameResult();
}

/*keep track of players' scores after each round*/
const scoreboardPlayer = document.querySelector(".player"); 

const playerScore = document.createElement("p");
playerScore.classList.add("player-score");
playerScore.textContent = 0;
scoreboardPlayer.appendChild(playerScore);

const scoreboardComputer = document.querySelector(".computer");

const computerScore = document.createElement("p");
computerScore.classList.add("computer-score")
computerScore.textContent = 0; 
scoreboardComputer.appendChild(computerScore);

function keepScore() {
  if (result === "You win! Rock beats Scissors." || result === "You win! Paper beats Rock." || result === "You win! Scissors beat Paper.") {
    playerScore.textContent = Number(playerScore.textContent) + 1;
  } else if (result === "You lose. Paper beats Rock." || result === "You lose. Scissors beat Paper." || result === "You lose. Rock beats Scissors.") {
    computerScore.textContent = Number(computerScore.textContent) + 1;
  }
}

/*calculate the results after all 5 rounds are finished*/
const gameResult = document.createElement("p");
gameResult.classList.add("game-result");
body.insertBefore(gameResult, resultsDiv); //move this once finished

function calculateGameResult() {
  if (playerScore.textContent === "5" && computerScore.textContent === "5") {
    gameResult.textContent = "Game result: it's a tie game!";
    //remove event listener
  } else if (playerScore.textContent === "5") {
    gameResult.textContent = "Game result: you win!";
    resultsDiv.textContent = "";
    //remove event listener
  } else if (computerScore.textContent === "5") {
    gameResult.textContent = "Game result. you lose.";
    resultsDiv.textContent = "";
    //remove event listener
  }
}

/*Enable gameplay with buttons*/
const choiceButtons = document.querySelectorAll(".choices button");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice())
  });
});


// give this error: Uncaught TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'.
/*
choiceButtons.forEach((button) => {
  button.addEventListener("click", playRound(button.className, getComputerChoice())
  );
});*/

//runs playRound as if each button's been pressed BEFORE they've been pressed?
/*
choiceButtons.forEach((button) => {
  button.addEventListener("click", console.log(playRound(button.className, getComputerChoice())
  ));
});*/

//Display the running score, and announce a winner of the game once one player reaches 5 points.

//1. keep track of score DONE
//2. use DOM methods to show the player and computer scores on screen DONE
//3. once someone's score hits 5, display game results, stop user from being able to play (remove event listeners from the rps buttons), and have a "play again" button appear 
//4. if user hits the "play again" button, the game resets (add back the event listeners to the rps buttons)


// play again
