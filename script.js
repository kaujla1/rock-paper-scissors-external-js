/*generate a random choice for the computer*/
function getComputerChoice() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerChoice;
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
  if (playerScore.textContent < "5" && computerScore.textContent < "5") { //Makes it so users can't play once someone hits 5 points
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
  }
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
  calculateGameResult(); //not sure this needs to be here, you could probably pull it out to the global level and it would still work as intended? 
}

/*calculate the results after all 5 rounds are finished*/
const gameResult = document.createElement("p");
gameResult.classList.add("game-result");
body.insertBefore(gameResult, resultsDiv); //move this once finished

function calculateGameResult() {
  if (playerScore.textContent === "5") {
    gameResult.textContent = "Game result: you win!";
    resultsDiv.textContent = "";
    playAgain();
  } else if (computerScore.textContent === "5") {
    gameResult.textContent = "Game result: you lose.";
    resultsDiv.textContent = "";
    playAgain();
  }
}

const choiceButtons = document.querySelectorAll(".choices button");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice())
  });
});

/*Play again*/
const playAgainButton = document.createElement("button");
playAgainButton.classList.add("play-again");
playAgainButton.textContent = "Play Again";

function playAgain() {
  playAgainButton.style.visibility = "visible";
  body.appendChild(playAgainButton);
  playAgainButton.addEventListener("click", () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playAgainButton.style.visibility = "hidden";
    gameResult.textContent = "";
  })
}
