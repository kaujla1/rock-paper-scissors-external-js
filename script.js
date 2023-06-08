/*Click me animation*/
const clickHere = document.querySelector(".click-here");
clickHere.classList.add("bounce");

clickHere.addEventListener("animationend", () => {
  clickHere.classList.remove("bounce");
  setTimeout(() => {clickHere.classList.add("bounce")}, 1000);
});

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
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      result = "You lose. Paper beats Rock.";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      result = "It's a tie! You both chose rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      result = "You win! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      result = "You lose. Scissors beat Paper.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      result = "It's a tie! You both chose Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result = "You win! Scissors beat Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = "You lose. Rock beats Scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      result = "It's a tie! You both chose Scissors.";
    }
    resultsDiv.textContent = result;
    keepScore();
    showPlayerChoice();
    showComputerChoice();
    changeBorderColor();
  } 
}

/*Connect to image divs*/
const playerChoiceImgDiv = document.querySelector(".player-choice-img-div");
const computerChoiceImgDiv = document.querySelector(".computer-choice-img-div");

/*Show players' choices*/
const playerChoiceImg = document.createElement("img");
const computerChoiceImg = document.createElement("img");

playerChoiceImg.classList.add("player-choice-img");
computerChoiceImg.classList.add("computer-choice-img");

function showPlayerChoice() {
  if (playerSelectionOuter === "rock") {
    playerChoiceImg.src = "./rps-icons/rock.png";
  } else if (playerSelectionOuter === "paper") {
    playerChoiceImg.src = "./rps-icons/paper.png";
  } else if (playerSelectionOuter === "scissors") {
    playerChoiceImg.src = "./rps-icons/scissors.png";
  }
  playerChoiceImgDiv.appendChild(playerChoiceImg);
}

function showComputerChoice() {
  if (computerSelectionOuter === "rock") {
    computerChoiceImg.src = "./rps-icons/rock.png";
  } else if (computerSelectionOuter === "paper") {
    computerChoiceImg.src = "./rps-icons/paper.png";
  } else if (computerSelectionOuter === "scissors") {
    computerChoiceImg.src = "./rps-icons/scissors.png";
  }
  computerChoiceImgDiv.appendChild(computerChoiceImg);
}

/*Change color of choice image borders depending on winner*/ 
function changeBorderColor() {
  if (result.includes("win")) {
    playerChoiceImgDiv.style.borderColor = "green";
    computerChoiceImgDiv.style.borderColor = "red";
  } else if (result.includes("lose")) {
    playerChoiceImgDiv.style.borderColor = "red";
    computerChoiceImgDiv.style.borderColor = "green";
  } else {
    playerChoiceImgDiv.style.borderColor = "yellow";
    computerChoiceImgDiv.style.borderColor = "yellow";
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

function calculateGameResult() {
  if (playerScore.textContent === "5") {
    resultsDiv.textContent = "Game result: you win!";
    playAgain();
  } else if (computerScore.textContent === "5") {
    resultsDiv.textContent = "Game result: you lose.";
    playAgain();
  }
}

/*Connect to rps choice buttons*/
const choiceButtons = document.querySelectorAll(".choices button");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clickHere.remove();
    playRound(button.className, getComputerChoice());
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
  resultsDiv.textContent = "";
  playAgainButton.style.visibility = "hidden"; //Note: using remove() here works fyi
  playerChoiceImgDiv.style.borderColor = "white";
  computerChoiceImgDiv.style.borderColor = "white";
})

function playAgain() {
  playAgainButton.style.visibility = "visible"; //necessary to have button "reappear" after it's been hidden
  resultsDiv.appendChild(playAgainButton);
} 