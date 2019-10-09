// We have 2 divs, one is #story, and the other was called "choices"

$(document).ready(function () {

    $("#story").append("<p>Eduardo woke up</p>");

    // creates the button image. non functional
    $("#choices").append("<button id = 'raining' >It is raining. </button>");
    $("#choices").append("<button id = 'sunny' >It is sunny. </button>");

    // Adds functionality to button created above/ Adds action to button
    $("#raining").click(function () {
        // Adds the text after you click the button/make a chose
       $("#story").append("<p> Unfortunately it is pouring like a tsunami outside. </p>");

       // Removes buttons after the was a choice so that we can add the next chose of buttons
       $("#raining").remove();
       $("#sunny").remove();


        // keep inside ".click function" function so that they dont run before removal of previous buttons
        $("#choices").append("<button id= 'umbrella'>Find Umbrella</button>");
        $("#choices").append("<button id= 'forget'>Forget about the Umbrella</button>");
//------------------
        $("#umbrella").click(function () {
            $("#story").append("<p>Eduardo took the umbrella, and lived happily ever after.</p>");

            $("#umbrella").remove();
            $("#forget").remove();

        });

        $("#forget").click(function() {
            $("#story").append("<p>Eduardo forgot his umbrella, and then get soaked, and get sick.</p>");

            $("#umbrella").remove();
            $("#forget").remove();
        });



    });



    









})