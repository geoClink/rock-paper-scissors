// 1. Initialize State
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// 2. Select DOM Elements (Do this once at the top)
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results");

const humanScoreElement = document.querySelector("#score-board > div:first-child");
const computerScoreElement = document.querySelector("#score-board > div:last-child");

const modal = document.querySelector("#game-over-modal");
const modalMessage = document.querySelector("#modal-message");
const modalRestart = document.querySelector("#modal-restart");

// 3. Game Logic Functions
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (!gameActive) return;

    // UI: Manage active button states
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.classList.remove('active'));
    document.querySelector(`#${humanChoice}`).classList.add('active');

    let resultMessage;

    // Win Logic
    if (humanChoice === computerChoice) {
        resultMessage = `This round was a tie!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultMessage = `${capitalize(humanChoice)} beats ${capitalize(computerChoice)}! You win!`;
    } else {
        computerScore++;
        resultMessage = `${capitalize(computerChoice)} beats ${capitalize(humanChoice)}! Computer wins!`;
    }

    // Update UI
    roundResults.textContent = resultMessage;
    humanScoreElement.textContent = `Human: ${humanScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function announceWinner() {
    gameActive = false;
    const winner = humanScore === 5 ? "Human" : "Computer";
    modalMessage.textContent = `${winner} reached 5 points and wins the match!`;
    modal.style.display = "flex";
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;

    roundResults.textContent = "";
    humanScoreElement.textContent = "Human: 0";
    computerScoreElement.textContent = "Computer: 0";
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.classList.remove('active'));
}

// 4. Event Listeners
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

modalRestart.addEventListener("click", () => {
    modal.style.display = "none";
    restartGame();
});