/*generate a random choice for the computer*/
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
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
body.insertBefore(resultsDiv, choiceDiv);

/*play a single round of rock paper scissors and return the result of the round*/
let result;

let playerSelectionOuter;
let computerSelectionOuter;

function playRound(playerSelection, computerSelection) {
  playerSelectionOuter = playerSelection;
  computerSelectionOuter = computerSelection;
  if (playerScore.textContent < "5" && computerScore.textContent < "5") { //Makes it so users can't play once someone hits 5 points
    if (playerSelection === "rock" && computerSelection === "scissors") {
      result = "You win! Rock beats Scissors.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      result = "You lose. Paper beats Rock.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      result = "It's a tie! You both chose rock.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      result = "You win! Paper beats Rock.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      result = "You lose. Scissors beat Paper.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      result = "It's a tie! You both chose Paper.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result = "You win! Scissors beat Paper.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = "You lose. Rock beats Scissors.";
      resultsDiv.textContent = result;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      result = "It's a tie! You both chose Scissors.";
      resultsDiv.textContent = result;
    }
    keepScore();
    showPlayerChoice();
    showComputerChoice();
  }
}

/*Connect to image divs*/
const playerChoiceImgDiv = document.querySelector(".player-choice-img");
const computerChoiceImgDiv = document.querySelector(".computer-choice-img");

/*Show players' choices*/
const playerChoiceImg = document.createElement("img");
playerChoiceImg.src = "";

const computerChoiceImg = document.createElement("img");


function showPlayerChoice() {
  if (playerSelectionOuter === "rock") {
    playerChoiceImg.src = "./rps-icons/rock.svg";
    playerChoiceImgDiv.appendChild(playerChoiceImg);
  } else if (playerSelectionOuter === "paper") {
    playerChoiceImg.src = "./rps-icons/paper.svg";
    playerChoiceImgDiv.appendChild(playerChoiceImg);
  } else if (playerSelectionOuter === "scissors") {
    playerChoiceImg.src = "./rps-icons/scissors.svg";
    playerChoiceImgDiv.appendChild(playerChoiceImg);
  }
}

function showComputerChoice() {
  if (computerSelectionOuter === "rock") {
    computerChoiceImg.src = "./rps-icons/rock.svg";
    computerChoiceImgDiv.appendChild(computerChoiceImg);
  } else if (computerSelectionOuter === "paper") {
    computerChoiceImg.src = "./rps-icons/paper.svg";
    computerChoiceImgDiv.appendChild(computerChoiceImg);
  } else if (computerSelectionOuter === "scissors") {
    computerChoiceImg.src = "./rps-icons/scissors.svg";
    computerChoiceImgDiv.appendChild(computerChoiceImg);
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
  calculateGameResult();
}

/*calculate the results after all 5 rounds are finished*/
const gameResult = document.createElement("p");
gameResult.classList.add("game-result");
body.insertBefore(gameResult, resultsDiv); //move this once finished?

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

/*Connect to rps choice buttons*/
const choiceButtons = document.querySelectorAll(".choices button");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice())
  });
});

/*Add play again button*/
const playAgainButton = document.createElement("button");
playAgainButton.classList.add("play-again");
playAgainButton.textContent = "Play Again";

playAgainButton.addEventListener("click", () => {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerChoiceImg.remove();
  computerChoiceImg.remove();
  gameResult.textContent = "";
  playAgainButton.style.visibility = "hidden";
})

function playAgain() {
  playAgainButton.style.visibility = "visible"; //necessary to have button "reappear" after it's been hidden
  body.appendChild(playAgainButton);
} 