let target;

const humanGuessInput = document.getElementById("human-guess");

const roundNumberDisplay = document.getElementById("round-number");

const computerGuessDisplay = document.getElementById("computer-guess");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const targetNumberDisplay = document.getElementById("target-number");
const computerWinsDisplay = document.getElementById("computer-wins");

const guessButton = document.getElementById("guess");

guessButton.addEventListener("click", () => {
  // Generate the target value
  target = generateTarget();
  // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value;
  // Make a random 'computer guess'
  const computerGuess = generateComputerGuess();

  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;

  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(
    currentHumanGuess,
    computerGuess,
    target
  );
  const winner = humanIsWinner ? "human" : "computer";

  // Update the correct score:
  updateScore(winner);

  // Display the winner
  if (humanIsWinner) {
    guessButton.innerText = "You Win!!!!!";
    guessButton.classList.toggle("winning-text");
  } else {
    computerWinsDisplay.innerText = "Computer Wins!!!";
  }

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Display the current scores:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  for (let i = 0; i < humanResult.length; i++) {
    humanResult[i].innerText = humanScore;
    computerResult[i].innerText = computerScore;
  }

  // Set the correct disabled state for the buttons
  guessButton.setAttribute("disabled", true);
  nextRoundButton.removeAttribute("disabled");
});

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");

addButton.addEventListener("click", () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener("click", () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const mobileBtns = document.getElementById("mobile-btns");
mobileBtns.addEventListener("click", (event) => {
  humanGuessInput.value = event.target.innerText;
});

const handleValueChange = (value) => {
  if (value > 0 && value <= 9) {
    subtractButton.removeAttribute("disabled");
    addButton.removeAttribute("disabled");
  } else if (value > 9) {
    addButton.setAttribute("disabled", true);
  } else if (value <= 0) {
    subtractButton.setAttribute("disabled", true);
  }
};

humanGuessInput.addEventListener("input", function (e) {
  handleValueChange(e.target.value);
});
