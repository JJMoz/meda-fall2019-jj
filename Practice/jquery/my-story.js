  
// We have two divs, one is #story, and the other was called #choices

// Make sure the DOM is ready before running jQuery Code.
$(document).ready(function () {
    
    // Start of the story with a sentence when we load the page.
    $("#story").append("<p>Should Bob set an alarm for work tommorrow.</p>");

    // add a button for raining.
    $("#choices").append("<button id='late'>NO</button>");

    // add a button for sunny.
    $("#choices").append("<button id='early'>YES</button>");

    // attach an event listener for the raining button.
    $("#late").click(function () {
        
        // If clicked...

        // add to the story with a sentence.
        $("#story").append("<p>Bob woke up late and will need to take a car.</p>");

        // remove the old choice buttons.
        $("#late").remove();
        $("#early").remove();

        // add the new choice buttons.
        $("#choices").append("<button id='umbrella'>Take a Lyft</button>");
        $("#choices").append("<button id='forget'>Take a Uber</button>");

        // attach an event listener for the umbrella button.
        $("#umbrella").click(function () {

            // if clicked...

            // add to the story with a sentence.
            $("#story").append("<p>Bob took a Lyft and the Lyft took a wrong turn and got stuck in traffic. Should Bob get out of the Lyft and Run to work?</p>");

            // remove the old choice buttons
            $("#umbrella").remove();
            $("#forget").remove();

            $("#choices").append("<button id='stay'>YES</button>");        
            $("#choices").append("<button id='stay'>No, Stay in Lyft</button>");

            // $("#story").append("<p>Bob was late to work and got FIRED </p>");
        });

        // attach an event listener for the forget button.
        $("#forget").click(function () {
            
            // if clicked...

            // add to the story with a sentence.     
            $("#story").append("<p>Eduardo forgot his umbrella, and then get soaked, and get sick.</p>");

            // remove the old choice buttons
            $("#umbrella").remove();
            $("#forget").remove();
        });


    });




    







});