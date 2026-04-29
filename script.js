let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let counter = Math.random();

    if (counter <= 0.33) {
        return `rock`
    } else if (counter > 0.33 && counter <= 0.66) {
        return `paper`
    } else {
        return `scissors`
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?");
    return choice;
}


    
    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1
            console.log(`Rock beats Scissors!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1
            console.log(`Scissors beats Paper!`)
            console.log(`The score is: Human ${humanScore} vs Computer: ${computerScore}.`)
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1
            console.log(`Paper beats Rock!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)

        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log(`Rock beats Scissors!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)
            computerScore += 1
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            console.log(`Paper beats Rock!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)
            computerScore += 1
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log(`Scissors beats Paper!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)
            computerScore += 1
        } else {
            console.log(`This round was a tie!`)
            console.log(`The score is: Human: ${humanScore} vs Computer: ${computerScore}.`)
        }
    }
    

     console.log(`The final score is: Human: ${humanScore} vs Computer: ${computerScore}.`)

    


