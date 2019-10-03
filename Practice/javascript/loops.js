// LOOPS

// Do While Loop
// For Loop
// While Loop


// Syntax of Do While

//    do { /* code */ } while ( true ); 
// Because the value of true never changes, the loop will never end. DANGEROUS


var aVariable = true;
var counter = 0;

do {
    
    // Grabs the value of conter (aftr the = ), then add a 1 to it, finally store the results back into counter (before the =)
    counter = counter + 1; // shorthand is counter++

    console.log("The value of counter is: " + counter);

    if (counter > 5){
        aVariable = false;
    }

} while ( aVariable );


//

var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice"
var i = 0
var loopContinue = true;
var lengthOfString = stringToTest.length;
// Console log the length of String value... put it here because we only need to run it once. out of the "do" brackets
console.log(lengthOfString);

do {


// Pull a character based on the current loop number (i) using the charAt function.
    var character = stringToTest.charAt(i);

// this is the increment, add 1 to each time the loop is run starting at 0. ....Add a 1 to the counter (i)
    i = i + 1;


// Console log the current value of character.
    console.log(character);


    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }

// After running the code check loopContinue to see if we should run this loop again
} while ( loopContinue );