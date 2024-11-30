let playerScreen = document.querySelector('.player-screen');
let cpuScreen = document.querySelector('.cpu-screen');
let heading = document.querySelector('.heading-1');
let choices = document.querySelectorAll('.choices div');
let count1 = 0;
let count2 = 0;

// player choice
let playerChoices = ()=>{
    for(let i = 0; i < choices.length; i ++){
        choices[i].addEventListener('click', (event)=>{
            let choice = event.target;
            if(choice){
                playerScreen.innerHTML = choice.innerHTML;
                computerChoices();
            }
        })
    }    
}
playerChoices();

// computer choice
let computerChoices = ()=>{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomChoice = document.querySelector(`.choices #choice-${randomNumber}`).innerHTML;
    cpuScreen.innerHTML = randomChoice; 
    checkWinner();
    randomExit();
}

// player update
let winUpdate = ()=>{
    heading.style.color = "hsl(189, 75%, 45%)";
    let winfx = new Audio('sounds/success.mp3');
    winfx.play();

    let score1 = document.querySelector('.score-1');
    count1 ++;
    score1.innerHTML = count1;
}
//cpu update
let loseUpdate = ()=>{
    heading.style.color = "hsl(4, 100%, 58%)";
    let losefx = new Audio('sounds/error.mp3');
    losefx.play();

    let score2 = document.querySelector('.score-2');
    count2 ++;
    score2.innerHTML = count2;
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
   let resetGame = ()=>{
    let resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', ()=>{
    playerScreen.innerHTML = '';
    cpuScreen.innerHTML = '';
    heading.innerHTML = " Rock Paper Scissors";
    let resetfx = new Audio('sounds/reset.mp3');
    resetfx.play();

    randomExit();
  })
}
resetGame();

// random play
let randomPlay = ()=>{
    let randomBtn = document.querySelector('.random-btn');
    randomBtn.addEventListener('click', ()=>{
    let randomBtnExit = document.querySelector('.random-btn-exit').style.display = 'block';
    let randomBtn = document.querySelector('.random-btn').style.display = 'none';
    let playBtn = document.querySelector('.random-play');
    let choices = document.querySelector('.choices');
    playBtn.style.display = 'block';
    choices.style.display = 'none';

    let clickfx = new Audio('sounds/reset.mp3');
    clickfx.play();
});
}
randomPlay();

// exit random play
let randomExit = ()=>{
    let randomBtnExit = document.querySelector('.random-btn-exit');
    randomBtnExit.addEventListener('click', ()=>{
    let randomBtn = document.querySelector('.random-btn').style.display = 'block';
    let randomBtnExit = document.querySelector('.random-btn-exit').style.display = 'none';

    let playBtn = document.querySelector('.random-play');
    let choices = document.querySelector('.choices');
    playBtn.style.display = 'none';
    choices.style.display = 'flex';

    let clickfx = new Audio('sounds/reset.mp3');
    clickfx.play();
});
}
randomExit();

let randomAuto = ()=>{
    let playBtn = document.querySelector('.random-play');
    playBtn.addEventListener('click', (event)=>{
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        let randomChoice = document.querySelector(`.choices #choice-${randomNumber}`).innerHTML;
        playerScreen.innerHTML = randomChoice; 
        computerChoices();
    })
}
randomAuto();