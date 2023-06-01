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

/*Create DOM results div*/
const resultsDiv = document.createElement("div");
resultsDiv.classList.add("results");
body.appendChild(resultsDiv); //CHANGE THIS when you're finishing so that the resultsDiv is appended somewhere else, not at the bottom of body. You might have to connect to another element to use it as a reference point. 


/*play a single round of rock paper scissors and return the result of the round*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    return resultsDiv.textContent = "You win! Rock beats Scissors."; 
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    return resultsDiv.textContent = "You lose. Paper beats Rock.";
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    return resultsDiv.textContent = "It's a tie! You both chose rock.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return resultsDiv.textContent = "You win! Paper beats Rock.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return resultsDiv.textContent = "You lose. Scissors beat Paper.";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    return resultsDiv.textContent = "It's a tie! You both chose Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return resultsDiv.textContent = "You win! Scissors beat Paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return resultsDiv.textContent = "You lose. Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return resultsDiv.textContent = "It's a tie! You both chose Scissors.";
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
