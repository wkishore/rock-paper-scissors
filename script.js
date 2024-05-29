function userChoice(){
    let uC = prompt("Rock, Paper, Scissors. Enter your choice:");
    return uC;
}

function pcChoice(){
    let a = Math.random();
    if(a<0.33)
        return "rock";
    if(a<0.66)
        return "paper";
    return "scissors";
}

function round(playerFunc, systemFunc){
    let a = playerFunc();
    a = a.toLowerCase();
    let b = systemFunc();
    if(a==b){
        alert(`System also chose ${b}. Its a tie.`);
        return 0;
    }
    if((a=='rock' && b=='paper')||(a=='paper' && b=='scissors')||(a=='scissors' && b=='rock')){
        alert(`System chose ${b}. System won.`);
        return 0;
    }
    else{
        alert(`System chose ${b}. You won.`);
        return 1;
    }
}


function game(){
    let a=0;
    for(let i=0;i<5;i++){
        a+=round(userChoice,pcChoice);
    }
    alert(`You won ${a} rounds`);
}

game();
