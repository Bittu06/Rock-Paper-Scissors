let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // Fix selector to .choice
const msg = document.querySelector("#msg");
const reset=document.querySelector(".reset");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; // Return the choice from options array
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!";
}

reset.addEventListener("click",()=>{
    const resetId = reset.getAttribute("class");
    resetGame(resetId);
});

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; // Fix property name
        msg.style.borderRadius = "10px";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"; // Fix property name
        msg.style.borderRadius= "10px";
    }
}


const resetGame=(resetId)=>{
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
}

const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});