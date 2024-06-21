const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * 3)
    let randomizedChoice = choices[randomIndex]
    return randomizedChoice
};




let getHumanChoice = () => {
    let humanInput = prompt("What do you choose?").toLowerCase()

    if(humanInput === "rock"){
        return "rock"
    } else if (humanInput === "paper") {
        return "paper"
    } else if (humanInput === "scissors") {
        return "scissors"
    } else {
        return "Invalid input"
    }
}







    let playRound = (humanChoice, computerChoice) => {
    if(humanChoice === "rock" & computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors.")
        humanScore++
    } else if(humanChoice === "scissors" & computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.")
        humanScore++
    } else if(humanChoice === "paper" & computerChoice === "rock"){
        console.log("You win! Paper beats Rock.")
        humanScore++
    } else if(humanChoice === computerChoice){
        console.log("It's a tie! Go again.")
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++
    }
}









while (humanScore < 5 && computerScore < 5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
}

if(humanScore == 5){
    console.log("You win the game!")
} else if(computerScore == 5){
    console.log("You lose the game!")

}