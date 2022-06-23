function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
var playerScore =0;
var computerScore =0;

        function playRound(playerSelection, computerSelection) {

            for (playerScore = 0, computerScore = 0; playerScore < 3, computerScore < 3;){
            computerSelection = computerPlay();
            playerSelection = (prompt("Let's play rock paper scissors! First player to 3 points wins! input rock, paper, or scissors to start."));

            if ((playerSelection == "scissors" && computerSelection == "paper") ||
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock"))
                {
                console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "You Win this round!" );
                playerScore ++;
                console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);

                if (playerScore === 3){
                    console.log ("Congratulations you won! \n Final score \n Your score: " + playerScore + "\nComputer Score: " + computerScore);
                    return;
                }
            } 
            else if (playerSelection == computerSelection){
                     console.log ("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" +"It's a tie! \n your score: " + playerScore + "\n computer score: " + computerScore);
                    }
            else {
                console.log("computer chooses: " + computerSelection + "!\n" + "you chose:" + playerSelection + "!\n" + "computer wins this round!" );
                computerScore ++;
                console.log("Your score: " + playerScore + "\n" + "Computer Score: " + computerScore);
            
                if (computerScore === 3){
                    console.log ("OH NOO! computer wins!! \nYour score: " + playerScore + "\nComputer Score: " + computerScore);
                    return;
                }
            }
            }
            
        
        }
        
    
    computerSelection = computerPlay
    playerSelection = "";
    console.log(playRound(playerSelection,computerSelection));




