//LETTER COUNTER JAVASCRIPT

//Create a string to play with a counter (i) a condition to stop the loop (loopContinue, and a variable to hold he number of characters of the string (lengthOFString)

var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice"
var i = 0
var loopContinue = true;
var lengthOfString = stringToTest.length; // "stringToTest.length" is a PROPERTY//


var characterToCheck = "s";
var count = 0;

do {


// Pull a character based on the current loop number (i) using the charAt function.
    var character = stringToTest.charAt(i);

// this is the increment, add 1 to each time the loop is run starting at 0. ....Add a 1 to the counter (i)
    i = i + 1;


// Console log the current value of character.
  //  console.log(character);

// Compare value of character to value of "characterToCheck" 
if (character == characterToCheck) {
  // console.log("We found a match for "  + characterToCheck);
    count = count +1;
}



    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }



// After running the code check loopContinue to see if we should run this loop again
} while ( loopContinue );

// Console log the length of String value... put it here because we only need to run it once. out of the "do" brackets
console.log("The string has a tolal length of " +
 lengthOfString + " characters.");

 console.log("The string we are testing is: " + stringToTest);


console.log("We have found a total of " + count + " for the letter " +  characterToCheck + ".");
// another way to do the above with back ticks and $
// console.log(`We found ${count} match for the letter ${characterToCheck})