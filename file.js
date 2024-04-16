let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");//accessing all the choice div and stored in choices
const msgPara = document.querySelector("#msg");// accesing msg to change the text everytime 
const userTotalScore = document.querySelector("#user-score");// accesing #user-scoreto change the score everytime
const compTotalScore = document.querySelector("#comp-score");// accesing #user-scoreto change the score everytime

//generate computer choice function
    const genCompChoice = () =>{
        const options = ["rock","paper","scissors"]; // (3rd part)lets build array and store the choice 
        const randindx = Math.floor(Math.random()* 3); // random number is created between 0 to 3, if array size is 4  then (* 5) and floor removes the decimal point so that we can get the int number to match the indx array  
        return options[randindx];

    }

    const drawGame = () => { // draw game function
        console.log("Game was draw");
        msgPara.innerText = "Game Was Draw.Play Again";
        msgPara.style.backgroundColor = "blue";
    }

    const showWinner = (userWin,userChoice,compChoice) => { // show winner func
    
        if(userWin === true)
        {
            userScore++;
            console.log("you win");
            msgPara.innerText = `You Win ,Your ${userChoice} Beats ${compChoice}`;
            msgPara.style.backgroundColor = "Green";
         
            userTotalScore.innerText = userScore;
        }
        else
        {
            compScore++;
            console.log("you lose");
            msgPara.innerText = `You Lose ${compChoice} Beats Your ${userChoice}`;
            msgPara.style.backgroundColor = "Red";
            compTotalScore.innerText = compScore;
        }
    }
const playGame = (userChoice) => { // (2ndpart)playgame func knows which choice was selected
    console.log("userchoice =",userChoice); // prints userchoice (Test Purpose) 
    //generate computer choice 
    const compChoice = genCompChoice(); // function returned ,see 3rd part how created comp choice
    console.log("computerchoice =",compChoice); //prints computers choice  (Test Purpose)

    if (userChoice === compChoice)
    {
        //draw game 
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            // scissors , paper
           userWin = compChoice === "paper" ? false : true ; 
        }
        else if(userChoice === "paper")
        {
            //scissors , rock 
            userWin = compChoice === "scissors" ? false : true ;
        }
        else
        {
            //paper , rock 
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{  //( 1st part )we are creating loop for each choice div to perform click event
    // console.log(choice); // all choice elements get printed
    choice.addEventListener("click", () => {  //adding click event listener to all the choice div
        const userChoice = choice.getAttribute("id"); // we can also retrive id of the particular choice that is clicked
        // console.log("You clicked",userChoice); // print msg and id 
        playGame(userChoice); //returns userchoice attribute name to playgame function
    });
    
});