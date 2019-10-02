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

    if (counter > 50){
        aVariable = false;
    }

} while ( aVariable );