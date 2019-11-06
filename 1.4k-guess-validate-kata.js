/* Guess Validator Function: Merit Badge 2
 * Adds counting turns, quit with q, and validating guess
 * By Mr. M. 
 */

/* Global Variables */
// Declare var answer as random integer between 1 and 100.

// Alert the answer while testing.
console.log(answer);
// Declare var guess, set to 0.
var guess = 0;
// Declare var turns, set to 0.

/* Main Code */
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
	// break out of loop if guess equals q. 
	
	// if validator returns true

		// Add 1 to turns
		
		// If guess lower than answer, say too low. 
		if (guess<answer) alert("too low");
		// Otherwise, if guess greater than answer, say too high. 
		else if (guess>answer) alert("too high");
	// Close If block
	}
	// Otherwise, alert "Invalid Guess." if validator returns false
	
	// Close While Loop block
}
// If they guessed it, tell them they got it in however many turns. 
if (guess == answer) alert("You got it in "+turns+" turns.");
// Otherwise, call them a quitter


/* Function validator
 * Checks if guess is valid integer within range (1-100 default)
 * If guess not valid, return false;
 * If guess valid, return true
 * @param guess
 * @return boolean 
 */
// Define Function with guess as parameter

// return true if guess is a valid integer within range 

// otherwise, guess is not valid. Return false. 

// Close Function Definition

