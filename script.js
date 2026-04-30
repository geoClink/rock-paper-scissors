// Initialize scores and elements
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results");
const scoreBoard = document.querySelector("#score-board");

// Get the Restart button
const restartButton = document.querySelector("#restart-button");

let gameActive = true; // Flag to track if the game is active

// Function to get computer choice
function getComputerChoice() {
    let counter = Math.random();
    if (counter <= 0.33) {
        return "rock";
    } else if (counter > 0.33 && counter <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    if (!gameActive) {
        // If the game is not active, do not proceed with the round
        return;
    }

    // Remove active class from all buttons
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');

    // Add active class to the clicked button
    if (humanChoice === "rock") {
        rockBtn.classList.add('active');
    } else if (humanChoice === "paper") {
        paperBtn.classList.add('active');
    } else if (humanChoice === "scissors") {
        scissorsBtn.classList.add('active');
    }

    let resultMessage;

    // Determine the winner of the round
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore += 1;
        resultMessage = `${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
    } else if ((computerChoice == "rock" && humanChoice == "scissors") ||
               (computerChoice == "paper" && humanChoice == "rock") ||
               (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore += 1;
        resultMessage = `${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!`;
    } else {
        resultMessage = `This round was a tie!`;
    }

    // Update the round results
    roundResults.textContent = resultMessage;

    // Update the score board
    const humanScoreElement = document.querySelector("#score-board > div:first-child");
    const computerScoreElement = document.querySelector("#score-board > div:last-child");

    humanScoreElement.textContent = `Human: ${humanScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;

    // Check if either player has reached 5 points
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to announce the winner and show the restart button
function announceWinner() {
    gameActive = false; // Set the game to inactive
    let winner;
    if (humanScore > computerScore) {
        winner = "Human";
    } else {
        winner = "Computer";
    }
    roundResults.textContent = `${winner} wins the game!`;
    // Show the Restart button
    restartButton.style.display = "block";
}

// Add event listeners to buttons
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// Restart Game Functionality
restartButton.addEventListener("click", restartGame);

// Function to restart the game
function restartGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // Reset display elements
    roundResults.textContent = "";
    document.querySelector("#score-board > div:first-child").textContent = "Human: 0";
    document.querySelector("#score-board > div:last-child").textContent = "Computer: 0";

    // Hide the Restart button
    restartButton.style.display = "none";

    // Reset game active flag
    gameActive = true;

    // Optionally, remove active classes from buttons if they still exist
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
}