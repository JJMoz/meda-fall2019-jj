
//ARGUMENTS
mathify(22,47);

mathify(10,40);

mathify (90,80);




// Parameters are (number1 , number2,) )
function mathify(number1, number2,){

    var description = "The following values were generated from " + number1 + " and " + number2 + ".";
    console.log(description)

    var add = number1 + number2;
    var addSentence = " number 1 plus number 2 = " + add;
    console.log(addSentence)

    var sub = number1 - number2;
    var subSentence = " number 1 subtract number 2 = " + sub;
    console.log(subSentence)

    var divide = number1 / number2;
    var divSentence = " number 1 divided by number 2 = " + divide;
    console.log(divSentence)

    var multiply = number1 * number2;
    var multiSentence = " number 1 multiply by number 2 = " + multiply;
    console.log(multiSentence)
}