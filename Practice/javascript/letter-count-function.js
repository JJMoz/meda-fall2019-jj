letterCount("Hello there how are you, nice weather. " , "l");

letterCount("This is another string " );








function letterCount(text, char) {

    if (char == undefined) {
        console.log ("This functoin call is missing an argument to fully run.  Stopping now. ")
    // return- stops running anymore code, below the "return"
    return;
    }


    var stringToTest = text;
    var i = 0;
    var count = 0;
    var loopContinue = true;
    var lengthOfString = stringToTest.length;
    var characterToCheck = char;


    do {

        var character = stringToTest.charAt(i);
    
        i = i + 1;
    
        if (character == characterToCheck) {
            count = count + 1;
        }

        if (i >= lengthOfString) {
            loopContinue = false;
        }

    } while ( loopContinue );




    console.log("The string has a total length of " + lengthOfString + " characters.");

    if (count > 1) {
        console.log("We found " + count + " matches for the letter " + characterToCheck + ".");
    } else if (count == 0) {
        console.log("We didn't find any matches for " + characterToCheck + ".");
    } else {
        console.log("We found " + count + " match for the letter " + characterToCheck + ".");
    }

}