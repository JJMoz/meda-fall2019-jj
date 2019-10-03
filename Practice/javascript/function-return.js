





 function myFunction () {
       var text = "Hellow World";
       return text;
   }


   var anyName = myFunction();
   console.log(anyName);

// Practice, Create 3 Diffrent Functions, each one returns a different datatype. Console.log the results of you functions

function myFunction3() {
    var text = "hello"
    return text;
}

var word = myFunction3();
console.log(word);

// Data flow using a buolt in function.

var aNumber = 2200;


// Provide data to the Math.round() function using aNumber as an argument
Math.round(aNumber); 

// *Do not write this in code* Math.round() will return a value of 2200, based on line 50, and the line 50 would now look like: 2200;





// Define the function "ourOwnRound" with a parameter of "theNumber".
function ourOwnRound(theNumber) {

    // Create a variable "results" with no value given
    var results;
    // Using the % equation, we can extra the decimal place, and store it in "decimalOFTheNUmber"
    var decimalOfTheNumber = theNumber % 1;

    // WE text the decimal value in "decimalOfTheNumber" and test if it is larger or smaller the then .5.....
    if (decimalOfTheNumber >= .5){
        //.... If it is larger, we round the orignal number stored in "theNumber" and store that in the results variable.
        results = Math.ceil(theNumber);
    }

    else {
        //.....If it is smaller, we round the original number stored in "theNumber" and sotre that in the results variable.
        results = Math.floor(theNumber);
    }

    // Return the value of results to where ever this function was called.
    return results;
}

// Method 1 to send to terminal
console.log(    ourOwnRound(63.2938) );

//Method 2 to send to terminal
var values = ourOwnRound(392.9833);
console.log(values);

// Equation to figure out just the decimal value.
// console.log(50.39 % 1 );
