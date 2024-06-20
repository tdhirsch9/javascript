const choices = ["rock", "paper", "scissors"]


let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * 3)
    let randomizedChoice = choices[randomIndex]
    return randomizedChoice
};

console.log(getComputerChoice())