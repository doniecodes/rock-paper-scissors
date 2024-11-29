let playerScreen = document.querySelector('.player-screen');
let cpuScreen = document.querySelector('.cpu-screen');
let heading = document.querySelector('.heading-1');

// player choice
let choices = document.querySelectorAll('.choices div:not(.random-play)');
for(let i = 0; i < choices.length; i ++){
    choices[i].addEventListener('click', (event)=>{
        let choice = event.target;
        if(choice){
            playerScreen.innerHTML = choice.innerHTML;
            computerChoice();
        }
    })
}

// computer choice
let computerChoice = ()=>{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomChoice = document.querySelector(`.choices #choice-${randomNumber}`).innerHTML;
    cpuScreen.innerHTML = randomChoice; 
    checkWinner();
    playerUpdate();
    winUpdate();
    loseUpdate();
}

// player update
let winUpdate = ()=>{
    heading.style.color = "hsl(189, 75%, 45%)";
    let winfx = new Audio('sounds/success.mp3');
    winfx.play();
}
//cpu update
let loseUpdate = ()=>{
    heading.style.color = "hsl(4, 100%, 58%)";
    let losefx = new Audio('sounds/error.mp3');
    losefx.play();
}

// check winner
let checkWinner = ()=>{
    let playerChoice = playerScreen.innerHTML;
    let cpuChoice = cpuScreen.innerHTML;

    if(playerChoice == '👊' && cpuChoice == '✌'){
        heading.innerHTML = "YOU WIN";
        winUpdate();
    }
    else if(playerChoice == '👊' && cpuChoice == '🖐'){
        heading.innerHTML = "YOU LOSE";
       loseUpdate();
    }    
    else if(playerChoice == '🖐' && cpuChoice == '👊'){
        heading.innerHTML = "YOU WIN";
        winUpdate();
    }    
    else if(playerChoice == '🖐' && cpuChoice == '✌'){
        heading.innerHTML = "YOU LOSE";
        loseUpdate();
    }    
    else if(playerChoice == '✌' && cpuChoice == '👊'){
        heading.innerHTML = "YOU LOSE";
        loseUpdate();
    }    
    else if(playerChoice == '✌' && cpuChoice == '🖐'){
        heading.innerHTML = "YOU WIN";
        winUpdate();
    }   else{
        heading.innerHTML = "DRAW!";
        heading.style.color = "hsl(189, 75%, 45%)";
        let drawfx = new Audio('sounds/draw.mp3');
        drawfx.play();
    }
} 

// reset button
let resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', ()=>{
    playerScreen.innerHTML = '';
    cpuScreen.innerHTML = '';
    heading.innerHTML = " Rock Paper Scissors";
    let resetfx = new Audio('sounds/reset.mp3');
    resetfx.play();
})