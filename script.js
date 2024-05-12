let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const textbox = document.getElementById("textBox");
const UserScore = document.getElementById("UserScore");
const CompScore = document.getElementById("CompScore");

const compGenerated = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const gameDraw = () => {
    textbox.innerText = "This game is a draw";
}

const winner = (userWin) => {
    if(userWin){
        userscore++;
        textbox.innerText = "You are the winner!!! :)";
        UserScore.innerText = userscore;
    }
    else{
        compscore++;
        textbox.innerText = "Computer is the winner :(";
        CompScore.innerText = compscore;
    }
}

const playGame = (userChoice) => {
    console.log("The User choice is",userChoice);
    //computer choice
    const compChoice = compGenerated();
    console.log("The Computer choice is",compChoice);
    
    if(userChoice === compChoice){
        console.log("The game is draw");
        gameDraw();
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true ;
        }
        winner(userWin);
    }
    
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        // console.log("The choice is",userChoice);
        playGame(userChoice);
    });
});