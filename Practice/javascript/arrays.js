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

//weekNames.unshift( weekNames.pop() );


// Array Method SPLICE(), designed to extract a part of an array

//              index # to start removal , when to end removal, how manny elements from start
// weeknNames.splice(3, 1);
var splitArray = weekNames.splice(3, 2);

console.log(splitArray);

// Add values to the Array manually by specifying the index number
splitArray[2] = "Friday";

// Update values to array by specifying the index number.
splitArray[8] = "Hiddenday";




// Arrays and Loops, 
var names = ["Alpha", "Sam", "Max", "Georgio", "Giermo", "Horacio", "Batman", "Bill", "Mackaw", "Robin" ];
                    // Instead of 10, we can use ".lenght" so we always loop for the exact number of items of the names array.
for (var counter = 0; counter < 10; counter = counter + 1){
    console.log("Hello " + names[counter] + "!!")
}


// MOST COMMON LOOP (same as above)

// for (var i = 0; i < 10; i++) {     }