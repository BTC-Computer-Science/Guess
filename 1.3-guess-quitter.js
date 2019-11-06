/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// Alert the answer while testing.
alert(answer);
// Declare var guess, set to 0.
var guess = 0;
// Declare var tries, set to 0.
var tries = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  // Prompt user for guess.
  guess=prompt("Guess my number (1-100)");
  // Check if Guess = "q" and if so, break out of loop (use break command)
  if (guess=="q") break;
  // Add one to tries	
  tries++;
  /* Add feedback based on guess values: if / else if  */
  // If guess lower than answer, say too low. 
	if(guess<answer) alert("too low");
  // If guess greater than answer, say too high. 
	else if(guess>answer) alert("too high");
  // Close While Loop Brackets
}
// Tell them they got it in however many tries. 
if (guess == answer) alert("You got it in "+tries+" tries.");
else alert("Quitter!");
