

function getComputerChoice(){
    var result = Math.floor(Math.random()*3);
    switch (result) {
    case 0:
        return "paper";
    case 1:
        return "rock";
    case 2: 
        return "scissors";
    }
}
function getPlayerChoice(){
    let choice = window.prompt();
    return choice;
}


function playRound(playerSelection,computerSelection){
    playerSelection= playerSelection.toUpperCase();
    computerSelection= computerSelection.toUpperCase();
    if(playerSelection===computerSelection){
        return "Draw!"
    }
    else{
        switch (playerSelection) {
            case "ROCK":
                if(computerSelection=="PAPER"){
                    return "You Lose!Paper beats Rock";
                }
                else{
                    return "You Win! Rock beats Scissors";
                }
            case "PAPER":
                if(computerSelection=="ROCK"){
                    return "You Win! Paper beats Rock";
                }
                else{
                    return "You Lose! Scissors beats Paper";
                }
            case "SCISSORS":
                if(computerSelection=="ROCK"){
                    return "You Lose! Rock beats Scissors";
                }
                else{
                    return "You Win! Scissors beats Paper";
                }
        }
    }
}
function game(){
    let count =5;
    while(count>0){
        let playerSelection=getPlayerChoice();
        let computerSelection=getComputerChoice();
       console.log(playRound(playerSelection,computerSelection))
        count--;
    }
}
game();