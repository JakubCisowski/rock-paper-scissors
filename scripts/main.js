"use strict";

function computerPlay() {
	let random = Math.floor((Math.random() * 3) + 1);
	switch(random) {
		case 1:
			return "rock";
			break;
		case 2:
			return "paper";
			break;
		case 3:
			return "scissors";
			break;
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelectionLower = playerSelection.toLowerCase();
	if( (playerSelectionLower == "rock" && computerSelection == "scissors") || 
		(playerSelectionLower == "paper" && computerSelection == "rock") ||
		(playerSelectionLower == "scissors" && computerSelection == "paper")) {
		return "You win, because "+playerSelectionLower+" beats "+computerSelection+"! :)";
		userScore++;
	}
	if (playerSelectionLower == computerSelection)
		return "Draw, both you and computer picked "+computerSelection+"!";
	else {
		return "You lost, because "computerSelection+" beats "+playerSelectionLower+"! :(";
		computerScore++;
	}
} 

function game(rounds) {
	for(let i=0; i<rounds; i++) {	
		let playerSelection = "";
		do 
			playerSelection = prompt("Choose your throw!");
		while ( (playerSelection.toLowerCase() != "rock") && 
				(playerSelection.toLowerCase() != "paper") && 
				(playerSelection.toLowerCase() != "scissors") )
		playround(playerSelection, computerPlay());
	}

	if(computerScore > playerScore)
		alert("Computer won the game "+computerScore+" to "+playerScore"! Better luck next time!");
	if(computerScore < playerScore)
		alert("You won the game "+playerScore+" to "+computerScore"! Congratulations!");
	else
		alert("Draw! "+playerScore+" to "+computerScore"! ");

}

let rounds = prompt("How many rounds do you want to play?")
let playerScore = 0;
let computerScore = 0;
game(rounds);