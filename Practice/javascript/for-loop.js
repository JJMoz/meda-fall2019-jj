// A sample do while loop that will run 11 times.


    // Initialize countr variable for loop
var counter = 0;

    // Create variable for the condition
var continueLoop = true;

do {
    console.log("Loop number for Do While Loop: "  + counter)
    // Iterator, change something to modify the condition
    counter = counter + 1;

    if (counter > 10) {
        continueLoop = false;

    }

    // Iterator End.

   

} while (continueLoop);


// A sample for loop that will run 10 times

// FOR loop
// Syntax for (Initialization ; Condition ; Iteration ) { Code }

for (var counter = 0; counter < 10; counter = counter + 1 ) {
    console.log("Loop number for FOR Loop: "  + counter)

}