let icons  = document.querySelectorAll(".icon_box");
let mssg = document.querySelector("#mssg");
let Comp_score = document.querySelector("#Comp_s");
let User_score = document.querySelector("#User_s");
let ResetButton = document.querySelector(".Reset_btn");

let User_score_update = 0;
let Comp_score_update = 0;

let Comp_arr = ["Rock","Paper","Scissors"];

let GenerateRan = ()=>{
    let idx = Math.floor(Math.random()*3);
    return Comp_arr[idx];
}

let ShowWinner =(user_win,userChoice,compChoice) => {
    if(user_win){
        mssg.innerText = `You Win. ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "green";
        User_score_update++;
        User_score.innerText = User_score_update;
    }
    else{
        mssg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        mssg.style.backgroundColor = "red";
        Comp_score_update++;
        Comp_score.innerText = Comp_score_update;
    }
}

let playGame = (userChoice) =>{
    let compChoice = GenerateRan();

    if(userChoice === compChoice){
        mssg.innerText = "It's A Draw. Play Again";
        mssg.style.backgroundColor = "#3e3e3e";
        
    }
    else{
        let user_win = false;
        if(userChoice === "Rock"){
            if(compChoice === "Paper"){
                user_win = false;
            }
            else{
                user_win = true;
            }
        }
        else if(userChoice === "Paper"){
            if(compChoice === "Scissors"){
                user_win = false;
            }
            else{
                user_win = true;
            }
        }
        else{
            if(compChoice === "Rock"){
                user_win = false;
            }
            else{
                user_win = true;
            }
            
        }
        
        ShowWinner(user_win,userChoice,compChoice);
    }
}


icons.forEach((icon) => {
    icon.addEventListener("click",() => {
        const Slcted = icon.getAttribute("id");
        playGame(Slcted);
    })
})

ResetButton.addEventListener("click", () => {
    mssg.innerText = "Make Your First Move";
    mssg.style.backgroundColor = "#3e3e3e";
    User_score_update = 0;
    Comp_score_update = 0;
    User_score.innerText = User_score_update;
    Comp_score.innerText = Comp_score_update;
})