let userScore=0,pcScore=0;
function pcChoice(){
    let a = Math.random();
    if(a<0.33)
        return "rock";
    if(a<0.66)
        return "paper";
    return "scissors";
}

function round(a){
    let b = pcChoice();
    let div = document.querySelector('.anotherOne');
    if(a==b){
        div.textContent=`System also chose ${b}. Its a tie.`;
        return -1;
    }
    if((a=='rock' && b=='paper')||(a=='paper' && b=='scissors')||(a=='scissors' && b=='rock')){
        div.textContent=`System chose ${b}. System won.`;
        return 0;
    }
    else{
        div.textContent=`System chose ${b}. You won.`;
        return 1;
    }
}


let btnParent = document.querySelector('.buttons');

btnParent.addEventListener('click', function(e){
    if(userScore>4 || pcScore>4)
        return;
    let userChoice = e.target.id;
    let retval = round(userChoice); 
    if(retval == -1){
        userScore++;pcScore++;
    }
    else if(retval == 0){pcScore++;}
    else userScore++;

    let div = document.querySelector('.anotherOne');
    let scoreDiv = document.querySelector('.text');
    scoreDiv.textContent = `Player:${userScore} PC:${pcScore}`;
    if(userScore>4){
        div.textContent='Player wins. Game Over.';
        return;
    }
    if(pcScore>4){
        div.textContent='PC wins. Game Over.';
        return;
    }
});

