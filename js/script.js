const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * 3)
    let randomizedChoice = choices[randomIndex]
    return randomizedChoice
};

const container = document.createElement("div")
document.body.appendChild(container)

const scoreBoard = document.createElement("div")
container.appendChild(scoreBoard)

const updateScore = () => {
    scoreBoard.textContent = `Player: ${humanScore} - Computer: ${computerScore}`
}

const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

const result = document.createElement("div")
document.body.appendChild(result)




    let playRound = (humanChoice, computerChoice) => {
    if(humanChoice === "rock" & computerChoice === "scissors"){
        result.textContent = "You win! Rock beats Scissors."
        humanScore++
    } else if(humanChoice === "scissors" & computerChoice === "paper"){
        result.textContent = "You win! Scissors beats Paper."
        humanScore++
    } else if(humanChoice === "paper" & computerChoice === "rock"){
        result.textContent = "You win! Paper beats Rock."
        humanScore++
    } else if(humanChoice === computerChoice){
        result.textContent = "It's a tie! Go again."
    } else {
        result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++
    }
    updateScore()
    
    if(humanScore == 5){
    result.textContent = "You win the game!"
    disableButtons();
    } else if(computerScore == 5){
    result.textContent = "You lose the game!"
    disableButtons();
    }
}



const rock = document.createElement("button")
container.appendChild(rock)
rock.textContent = "rock"

rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    playRound("rock", computerChoice)
})

const paper = document.createElement("button")

container.appendChild(paper)
paper.textContent = "paper"

paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    playRound("paper", computerChoice)
})

const scissors = document.createElement("button")

container.appendChild(scissors)
scissors.textContent = "scissors"

scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    playRound("scissors", computerChoice)
})




