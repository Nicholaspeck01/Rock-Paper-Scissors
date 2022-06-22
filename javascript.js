let playerSelection = prompt("I challenge you to a game of Rock Paper scissors! (best of 5) input your choice!");

var rps = ["rock","paper","scissors"];
computerSelection = rps[computerPlay()]
let playerScore =0;
let computerScore =0;
function computerPlay(){
    return Math.floor(Math.random() * 3);

}


function game(playerScore,computerScore){
    if (playerScore === 3){
        console.log("WINNER!! you won 3 rounds! while the computer only won: " + computerScore);
        return;

    } else if (computerScore === 3) {
        console.log("SORRY!! computer won 3 round! while you only won: " + playerScore);
        return;
    }
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "You Win this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "You Win this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    } 
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "You Win this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "Computer wins this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "Computer wins this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "Computer wins this round!" );
        playerScore ++;
        console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
    }
}
}


  console.log(playRound(playerSelection, computerSelection));
  