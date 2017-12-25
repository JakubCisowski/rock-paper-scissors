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
	let playerSelectionLower = playerSelection.toLowerCase();
	if( (playerSelectionLower == "rock" && computerSelection == "scissors") || 
		(playerSelectionLower == "paper" && computerSelection == "rock") ||
		(playerSelectionLower == "scissors" && computerSelection == "paper")) {
		playerScore++;
		console.log(countRound++ + ". "+"%cYou win, because "+playerSelectionLower+" beats "+computerSelection+"! :)","background-color:#ccffcc");
	}
	else if (playerSelectionLower == computerSelection)
		console.log(countRound++ + ". "+"Draw, both you and computer picked "+computerSelection+"!" );
	else {
		computerScore++;
		console.log (countRound++ + ". "+"%cYou lost, because "+computerSelection+" beats "+playerSelectionLower+"! :(","background-color:#ffcccc" );	
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
		playRound(playerSelection, computerPlay());
	}

	if(computerScore > playerScore)
		console.log("* %cComputer won the game "+computerScore+" to "+playerScore+"! Better luck next time! *","font-weight:bold");
	else if(computerScore < playerScore)
		console.log("* %cYou won the game "+playerScore+" to "+computerScore+"! Congratulations! *","font-weight:bold");
	else
		console.log("* %cDraw! "+playerScore+" to "+computerScore+"! *","font-weight:bold");

}

let rounds = prompt("How many rounds do you want to play?");
let countRound = 1;
let playerScore = 0;
let computerScore = 0;
game(rounds);