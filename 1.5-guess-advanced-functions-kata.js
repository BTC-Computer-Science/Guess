/* Guess Advanced Function by Mr. M. */
// matches https://www.lucidchart.com/invitations/accept/78dd831f-d995-4438-909f-f9d5bbab4ed4

/* Initialize Globals */
// add globals for games = 0 again = true and totalTurns =0
/* Play Again Loop */
// while loop if again = true add 1 to games
	/* Initialize Locals */
	var turns = 0;
	var guess = 0;
	var answer = Math.floor(Math.random()*100)+1;
	// console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer) {
				// call gameStats with turns
				// set again equal to newGame
			}
		}
		else alert("Invalid guess, try again.");
	}
	// add another check for "q" and break

}
// game is over

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */


/* Function gameStats
 * shows player games and average turns per game calculated as totalTurns / games
 * @param turns
 * @return none
 * @modifies totalTurns
 */

	
/* Function newGame
 * Gives player option to play again (y) and returns boolean again, y = true
 * @param none
 * @return boolean  
 * @modifies again
 */
