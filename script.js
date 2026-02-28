function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    let realCompChoice = "";
    if(compChoice == 0){
        realCompChoice = "rock";
    }else if(compChoice == 1){
        realCompChoice = "paper";
    }else{
        realCompChoice = "scissor";
    }
    return realCompChoice;
}

function getHumanChoice(){
    return prompt("What's your choice ?");
}

let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, computerChoice){
    let realHumanChoice = humanChoice.toLowerCase();

    if(!humanChoice){
        alert("invalid input"), prompt("What's your choice ?");
    }else if((realHumanChoice === "rock" && computerChoice === "scissor")
        || (realHumanChoice === "paper" && computerChoice === "rock")
        || (realHumanChoice === "scissor" && computerChoice === "paper") ){
        console.log("You Win This Round!"), alert("You Win This Round!"), humanScore++;
    }
    else if((realHumanChoice === "rock" && computerChoice === "paper")
        || (realHumanChoice === "paper" && computerChoice === "scissor")
        || (realHumanChoice === "scissor" && computerChoice === "rock")){
        console.log("You Lose This Round!"), alert("You Lose This Round!"), compScore++;
    }
    else{
        console.log("It's a Tie!"), alert("It's a Tie!");
    }
}

function playGame(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(3);
    playRound(humanChoice,computerChoice);
}

while(humanScore < 5 && compScore < 5){
    playGame();
}

switch(true){
    case (humanScore === 5):
        console.log(`You Won, Computer lost! \nFinal score: \nHuman: ${humanScore} - Computer: ${computerScore}`), alert("You Won, Computer Lost!");
        break;
    case (compScore === 5):
        console.log(`You Lost! Computer Won! \nFinal score: \nHuman: ${humanScore} - Computer: ${computerScore}`), alert("You Lost! Computer Won!");
        break;
}