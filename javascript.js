//let playerSelection = prompt("I challenge you to a game of Rock Paper scissors! input your choice!");

var rps = ["rock","paper","scissors"];
computerSelection = rps[computerPlay()]
let playerScore =0;
let computerScore =0;
function computerPlay(){
    return Math.floor(Math.random() * 3);

}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" );
    }

  }
  console.log(computerSelection);

  //console.log(playRound(playerSelection, computerSelection));
  