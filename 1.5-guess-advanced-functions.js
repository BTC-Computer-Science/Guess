/* Guess Advanced Function by Mr. M. */
// DOES NOT USE BREAKS - instead uses complex conditional operators.  Might use breaks to make it simpler. 

/* Initialize Globals */
var games = 0;
var again = true;
var totalTurns = 0;
/* Play Again Loop */
while (again == true && guess !="q") {
	games++;
	/* Initialize Locals */
	var turns = 0;
	var guess = 0;
	var answer = Math.floor(Math.random()*100)+1;
	// console.log(answer);
	while (guess != answer && guess !="q"){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
		}
		else if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer) {
				// call gameStats with turns
				gameStats(turns, totalTurns);
				// set again equal to newGame
				again = newGame();
			}
		}
		else alert("Invalid guess, try again.");
	}
}
// game is over

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */
function validate(guess){
	if (guess="q" ||  guess > 0 && guess < 101){
		return true;
	}
	else return false;
}

/* Function gameStats
 * shows player games and average turns per game calculated as totalTurns / games
 * @param turns
 * @return none
 * @modifies totalTurns
 */
function gameStats(turns, totalTurns){
	alert("You got it in "+turns+" turns!");
	totalTurns += turns;
	var averageTurns = totalTurns / games;
	alert("You won "+games+" games with an average of "+averageTurns+" turns per game!");
}
	
/* Function newGame
 * Gives player option to play again (y) and returns boolean again, y = true
 * @param none
 * @return boolean  
 * @modifies again
 */
function newGame(){
	var again = prompt("Play again? y = yes.");
	if (again == "y") {
		return true;
	}
	else {
		alert("Sorry to see you go!");
		return false;
	}
}
