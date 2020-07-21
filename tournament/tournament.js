let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let stage = 1;
const nextRoundButton = document.getElementById("next-round");
const humanResult = document.getElementsByClassName("human-result");
const computerResult = document.getElementsByClassName("computer-result");
const stageNumber = document.getElementById("stage-number");
const continueBtn = document.getElementById("continue-btn");
var highestTarget = 10;

const generateTarget = () => Math.floor(Math.random() * highestTarget);

const generateComputerGuess = () => Math.floor(Math.random() * 10);
// detects the winner of each round between the user and computer
const compareGuesses = (userGuess, computerGuess, secretTargetNum) => {
  let userValue = Math.abs(userGuess - secretTargetNum);
  let computerValue = Math.abs(computerGuess - secretTargetNum);
  if (userValue > computerValue) {
    return false;
  } else {
    return true;
  }
};

// score updator function
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};
// roundnumber increment function
const advanceRound = () => currentRoundNumber++;

nextRoundButton.addEventListener("click", () => {
  if (currentRoundNumber == 10) {
    nextRoundButton.setAttribute("data-toggle", "modal");
    if (humanScore > computerScore) {
      nextRoundButton.setAttribute("data-target", "#user-wins");
    } else {
      nextRoundButton.setAttribute("data-target", "#opponent-wins");
    }
  } else {
    uiHandler();
  }
});
continueBtn.addEventListener("click", () => {
  stage++;
  stageNumber.innerText = stage;
  highestTarget += 5;
  humanScore = 0;
  computerScore = 0;
  currentRoundNumber = 0;
  uiHandler();
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  nextRoundButton.removeAttribute("data-toggle", "modal");
  nextRoundButton.removeAttribute("data-target", "#user-wins");
});

const uiHandler = () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute("disabled", true);
  guessButton.removeAttribute("disabled");

  // Reset the guess input box and the target number display:
  targetNumberDisplay.innerText = "?";
  guessButton.innerText = "Guess";
  humanGuessInput.value = "0";
  computerGuessDisplay.innerText = "?";
  computerWinsDisplay.innerText = "";
  guessButton.classList.remove("winning-text");
};
