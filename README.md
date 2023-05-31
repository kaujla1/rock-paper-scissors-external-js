# rock-paper-scissors-external-js

## Notes
This is a duplicate of my original rock-paper-scissors game but with the js stored in an external file. 

## Code to enable 5 rounds 

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
