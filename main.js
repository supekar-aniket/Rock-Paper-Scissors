let userScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userScoreResult = document.querySelector("#user-score");
const computerScoreResult = document.querySelector("#computer-score");
const drawScoreResult = document.querySelector("#draw-score");

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScoreResult.innerText = userScore;

        msg.innerText = `You Win...Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";
    }else {
        computerScore++;
        computerScoreResult.innerText = computerScore;

        msg.innerText = `You Loose...${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const drawGame = () => {
    drawScore++;
    drawScoreResult.innerText = drawScore;

    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";    
}

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
   return options[randomIndex];
}

const playGame = (userChoice) => {
    console.log("User Choice : ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice : ",computerChoice);

    let userWin;
    // Draw game
    if(userChoice === computerChoice){
        drawGame();
    } else {
        if(userChoice === "rock"){
            // Computer choice -> paper, scissors
            userWin = computerChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            // Computer choice -> scissors, rock  
            userWin = computerChoice === "scissors" ? false : true;
        }else {
            // Computer choice -> rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})