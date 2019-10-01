

var someNumber = 50.304;

var results = Math.round(someNumber);

var sentence = "The Number " + someNumber + " rounded is " + results +"!";

console.log(sentence);

// MORE MATH FUNCTIONS

//Rounds to the top integer
console.log( Math.ceil(45.2));

//another way to do it
var ceiling = Math.ceil (45.2);
console.log(ceiling);

//Rounds to the lower integer
console.log( Math.floor(45.8));

// Argument 1 power to argument 2
console.log( Math.pow(10, 2) );

// Square root of Argument 1
console.log( Math.sqrt (100) );

//Create a randam number between 0 and .999999~ infinity
var random = Math.random();

// Take random number and multiply by -1. negative variable will hold negative version of random
var negative = random  * -1;

// Take random number and multiply by 10, range will hold product
var range = random * 10;

// Take range value and round up, then store number in wholeNUmber variable
var wholeNumber = Math.ceil(range);

// Send wholeNumber value to console
console.log(wholeNumber);




//MORE FUNCTIONS- CONVERT DATA TYPES




//parseInt attempts to convert a Datatype String into a Datatype Number. Any & ALL data inputted by guest into website will be sent as String data, need to convert it to have the correct outcome.
parseInt ("Hello"); // probably NaN
parseInt ("1000"); // number 1000
parseInt ("100Hello"); // Number 100
parseInt("hello100"); // NaN

parseFloat(1000.30300); // Number 1000.30300
parseInt(1000.30300); // Number 1000

// chartAt, Finds the character at position 7 , starting with 0 and counting splaces
// "Hello World".chartAt(4);
console.log("Hello World".charAt(8) );

// Find the character in the string and return the position number and send it to the console.
console.log("Hello World".indexOf("r") );
