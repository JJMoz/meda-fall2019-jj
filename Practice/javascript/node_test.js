// This is a single line comment


/*
This is a 
mult-line
comment!*/


// console.log( ) takes a value and passes it to the console
console.log("Hello how are you");
console.log("This is another line of console log");

// Basic Datatypes
"Ths is a string of characters";
"This is another string";
"1500";
"false";

// Number Datatype
1920;
50000;

//Boolean Datatype (keywords)
true;
false;

//Creating a variable
// syntax var nameOFVariable
var message;

//Store a value into the message variable
message = "This is stored inside of a a variable";

//Grab the value of the message variable and send it to the console/terminal
console.log(message);


//Variables can onl hold one value at a time, so we are overwriting the previous value in message when we reassign
message = " I overwrote the prevous test in message variable";

//Because this is console log () happened after the update we will get the new value to the consule.
console.log(message);

var string;
var number;
var boolean;

string = "this is string data";
number = 2000;
boolean = true;

console.log(string);
console.log(number);
console.log(boolean);

//can but mutliple variables by inserting a comma, does the same as above
console.log(string, number, boolean)

//END OF BASIC JAVASCRIPT


var value1 = 100;

var value2 = value1;

console.log(value2);


//Order of operations for equal sign;
// runs second = runs first

//Math Operators.
/* 
+ addition
- subtraction
/ division
* multiplication
% modulo 
*/

var sum = 39 + 74 + 300;
var difference = 100 - 30;
var quotient = 10 / 3;
var product = 100 * 2;

//These math operators are only available to NUmber datatype

/* 
You cannot do this:
var diff = true / "string"
var other = "another string" * 100;
 */

 // This + operator has two ussages. The second one is called CONCATINATION.
 var wholeSentence = "My name is" + "JJ";
 console.log(wholeSentence);