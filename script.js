let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const roundResults = document.querySelector("#round-results");
const scoreBoard = document.querySelector("#score-board");

function getComputerChoice() {
    let counter = Math.random();
    if (counter <= 0.33) {
        return `rock`;
    } else if (counter > 0.33 && counter <= 0.66) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let resultMessage;

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore += 1;
        resultMessage = `${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`
    } else if ((computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "paper" && humanChoice == "rock") ||
        (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore += 1;
        resultMessage = `${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!`
    } else {
        resultMessage = `This round was a tie!`;
    }

    roundResults.textContent = resultMessage;

    const humanScoreElement = document.querySelector("#score-board > div:first-child");
    const computerScoreElement = document.querySelector("#score-board > div:last-child");

    humanScoreElement.textContent = `Human: ${humanScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;

    if (humanScore === 5) {
        announceWinner("Human");
    } else if (computerScore === 5) {
        announceWinner("Computer");
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function announceWinner(winner) {
    roundResults.textContent = `${winner} wins the game!`;
}




