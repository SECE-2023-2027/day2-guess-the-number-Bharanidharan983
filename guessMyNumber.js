// 1. Get all the nodes from HTML

const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");

// 2. Generate a random number and score

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
console.log(randomNumber);

// 3. Check Button Functionality

const checkFunction = () => {

    const userGuess = Number(guess.value);
    
    //3.1 Check user has entered a number or not
    if (!userGuess) {
        message.textContent = "User has not entered anything";
    }
    //3.2 Check the value is equal to the random number or not
    else if(userGuess===randomNumber) {
        highscore.textContent=scoreValue;
        document.querySelector("body").style.backgroundColor = "green"; //  "#60b347"
        number.textContent = randomNumber;
    }
    //3.3 Check Value is less than equal to the random number or not
    else if(userGuess > randomNumber) {
        if(scoreValue > 1) {
            message.textContent = "Too High!";
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = "You lost the game!";
            score.textContent = 0;
        }
    } 
    //3.4 Check Value is greater than equal to the random number or not
    else if(userGuess < randomNumber) {
        if(scoreValue > 1) {
            message.textContent = "Too Low!";
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = "You lost the game!";
            score.textContent = 0;
        }
    }   

};


//4. Again Button Functionality