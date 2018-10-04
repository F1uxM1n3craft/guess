// *** Guessing Game by Ben M, Burlington Tech Center Student ***
// ** Basic Initializations **
// var answer integer, Picks number between (1-100).
var answer = Math.floor(Math.random()*100)+1;
// var turns integer, set to 0
var Turns = 0;
// var correct boolean, set to false
var Correct = false;
// Keep looping while correct is false
while(Correct == false) {
   // prompt user for guess, tell user what to input
  var guess = prompt("Guess a num from (1-100)");
   // check if guess is equal to answer
  if (guess == answer) Correct = true;
  
   // check if guess greater than answer
       // give feedback: go lower
  if (guess > answer)
    alert("Guess was too high, go lower")
  
   // check if guess lower than answer
       // give feedback: go higher
  if (guess < answer)
    alert("Guess was too low, go higher")
   
// ** Basic loop end
   // if equal, say "Correct!" and say number of turns
    // add one to turns
  Turns++;
}
    alert("you guess it in "+Turns+" turns");
alert("Thanks for playing!");
