var mySecondArray = [
    "value",
    1000,
    true,
    "cool"
 ];

var myFirstObject = {
    key: "value", 
    money: 1000, 
    rain: true, 
    data4: "cool" 
};


// Accessing "cool" in array.
console.log( "Array Version: " + mySecondArray[3] );

// Accessing "cool" in  OBJECT.
console.log( "Object Version: " + myFirstObject["money"] );

// Updatting a value inside of an Object
myFirstObject ["rain"] = false;

//Adding a new key-value to an existing Object
myFirstObject["day"] = "sunny";

// Adding a new value to an array. index items 5-9 will be empty
mySecondArray [10] = 1; 

console.log(myFirstObject);
console.log(mySecondArray);