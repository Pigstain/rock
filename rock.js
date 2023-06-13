let pc_wins=0;
let p_wins=0;

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


function playRound(e){
    let playerSelection=e;
    
    let computerSelection=getComputerChoice();
    computerSelection= computerSelection.toUpperCase();
    const display = document.querySelector(".display");
    const screen = document.querySelector(".screen");
    const screen_p = document.querySelector(".screen-p");
    if(playerSelection===computerSelection){
        display.innerHTML="Draw!";
    }
    else{
        switch (playerSelection) {
            case "ROCK":
                if(computerSelection=="PAPER"){
                    display.innerHTML="You Lose!Paper beats Rock";
                    screen.innerHTML=++pc_wins;
                }
                else{
                    display.innerHTML="You Win! Rock beats Scissors";
                    screen_p.innerHTML=++p_wins;
                }
                break;
            case "PAPER":
                if(computerSelection=="ROCK"){
                    display.innerHTML="You Win! Paper beats Rock";
                    screen_p.innerHTML=++p_wins;
                }
                else{
                    display.innerHTML="You Lose! Scissors beats Paper";
                    screen.innerHTML=++pc_wins;
                }
                break;
            case "SCISSORS":
                if(computerSelection=="ROCK"){
                    display.innerHTML="You Lose! Rock beats Scissors";
                    screen.innerHTML=++pc_wins;
                }
                else{
                    display.innerHTML="You Win! Scissors beats Paper";
                    screen_p.innerHTML=++p_wins;
                }
                break;
        }
    }
    check();
    return;
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
function temp(){
    console.log('HEY');
}
const button = document.querySelectorAll('.button');
button.forEach(button => {
   

    button.addEventListener("click",()=>playRound(button.textContent));
    
});
function check(){
if(pc_wins==5|| p_wins==5){
    const screen = document.querySelector(".screen");
    const screen_p = document.querySelector(".screen-p");
    if(p_wins===5){
    window.alert("YOU WONS");
        screen.innerHTML=0;
        screen_p.innerHTML=0;
    }
    else{
        window.alert("PC WON");
        screen.innerHTML=0;
        screen_p.innerHTML=0;
    }
    p_wins=0;
    pc_wins=0;
}
}
//game();