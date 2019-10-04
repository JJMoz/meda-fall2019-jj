var myVariable = "One thing at a time";

myVariable = "This is a new value";

var firstDay = "Monday";
var secondDay = "Tuesday";
// ..............


// ARRAY SYNTAX; [ firstValue, secondValue, thirdValue ]


var weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// Call the whole array and send it to the console.
console.log(weekNames);

//  Call the second value in the array, and send it to the console
console.log(   weekNames[1]  );

console.log(weekNames[4]);

// Array Methods/Functions

// Add element to the end of the array: push(); .... lets you add  a element to the end of the array
weekNames.push("SuperDay");

console.log(weekNames);


// Remove an element at the start of the array: shift();.... lets you remove the fisrt element of the array

weekNames.shift();
console.log(weekNames);

// RESTORING ARRYA USING ARRAY METHODS

weekNames.unshift("Monday");
// weekNames.unshift("Funday", "Monday");

//removes "Superday"
weekNames.pop();

console.log(weekNames);

 var day = weekNames.pop();
weekNames.unshift(day);
console.log(weekNames);
