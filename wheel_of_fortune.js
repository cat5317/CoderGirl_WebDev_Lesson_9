// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'SMILE'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.

var isGuessingLetter = true; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing.

var letter = 'E'; // UPPERCASE

// SCRIPT ////////////////////////////////////////////////////////////

// If guessing a letter...
if (isGuessingLetter == true) {

	// If the word contains the letter...
  if (letter == "S"){
    console.log("S____");
  } else if (letter == "M") {
      console.log("_M___");
    } else if (letter == "I") {
      console.log("__I__");
    } else if (letter == "L") {
      console.log("___L_");
    } else if (letter == "E") {
      console.log("____E");
    } else {
      console.log("Sorry, no " + letter);
    }
		// Print back the word with all instances of that letter revealed.

	// If the word does not contain the letter...
} else {
  if (word == "SMILE") {
    console.log("Congratulations! You won Wheel Of Fortune!");
  } else {
    console.log("Nope, keep trying!");
  }

}

// If guessing the word...

	// If they are correct...


// End of script!
