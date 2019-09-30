
console.log("Hello how are you");

if (true) {
    console.log("this code block ran because the condition was true");
} else {
    console.log("this code block ran because the condition was false")  
}

var age = 30;

if (age >= 21) {
    console.log ("You are old enough")
} else if (age == 18) {
    console.log ("You are an adolescent")
}
else {
    console.log ("You are too young")
}


var age = 99;

if (age == 0) {
    console.log ("congrats you where just born")
} 
else if (age <= 1) {
    console.log ("congrats you survived this long.")
}
else if (age <= 5) {
    console.log ("You are a child")
}
else if (age <= 13) {
    console.log ("You are a teen")
}
else if (age <= 18) {
    console.log ("Young Adult")
}
else if (age <= 26) {
    console.log ("Adult")
}
else if (age >= 65) {
    console.log ("Elder")
}
else {
    console.log ("We don't know else")
}

/* IF , ELSE IF */
// if () {} ele if () {} 

//IF, ELSE  
// if () {} else {}


// OR Operator written as "||"


if (true || false) {
    console.log("Either was true")
}

var age2 = 10;

if (age2 == 5 || age2 == 6) {
    console.log("You are a brat")
}

//  AND Operator written as &&
if (true && false) {
    console.log("Both of these are true")
}
// && FIRST, || SECOND
if (true && true || false && true) {
    console.log("I have no clue")
}

// ORDER MATTERS
if (false && true || true && true) {
    console.log("I have no clue")
}

if (age == 0) {
    console.log ("congrats you where just born")
}
else if (age > 0 && age < 18) {
    console.log ("Kid")
}
else if (age > 17 && age < 65) {
    console.log ("Adult")
}
else if (age > 65) {
    console.log ("Elder")
}
else {
    console.log("YOu are not born yet")
}



// Detecting Negative or Positive Numbers
var numberTester = -100;

if (numberTester >0){
    console.log("This number is positive")
}
else if (numberTester < 0) {
    console.log("This number is negative")
}


// Detecting capital or lowercase B
var testForLetterB = "B";

if (testForLetterB == "b" || testForLetterB =="B") {
    console.log("this character is a B Character")
}

// Truesies and Falsies

// Falsies types below
false;
0;
""; // nothing between "  "
undefined;
null;
NaN;

// Truesies
// > 0;
// < 0;
"anything" // Strings

var test = "0";

if (test) {
    console.log("The value of test " + test + " is truthy") 

}

/*
Review what we covered so far
Variables 
Datatypes
IF Statements, IF, Else, If Else 
Logical Operators || Comparitors
AND and OR operators || && ||
Truthy and Falesy values
*/

