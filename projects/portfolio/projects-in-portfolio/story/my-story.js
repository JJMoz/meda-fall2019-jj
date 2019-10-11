// We have two divs, one is #story, and the other was called #choices

$(document).ready(function (){

    $("#story").append("<p>Should Bob set an alarm for work tommorrow?</p>");

    $("#choices").append("<button id='early'>YES</button>");
    $("#choices").append("<button id='late'>NO</button>");

    $("#late").click(function () {
        
        $("#story").append("<p>Bob woke up late and will need to take a car.</p>");

        $("#late").remove();
        $("#early").remove();

      
        $("#choices").append("<button id='lyft'>Take a Lyft</button>");
        $("#choices").append("<button id='uber'>Take a Uber</button>");

    
        $("#lyft").click(function () {

            // if clicked...

            // add to the story with a sentence.
            $("#story").append("<p>Bob took a Lyft and it made a wrong turn.  The Lyft is now stuck in traffic.    Should Bob get out of the Lyft and Run to work?</p>");

            // remove the old choice buttons
            $("#lyft").remove();
            $("#uber").remove();

            $("#choices").append("<button id='run'>Yes, Run</button>");        
            $("#choices").append("<button id='stay'>No, Stay in Lyft</button>");

            $("#run").click(function (){
                $("#story").append("<p> Bob arrived to work on time. You Chose Wisely.</p>");

                $("#run").remove();
                $("#stay").remove();
            })

            $("#stay").click(function () {
                $("#story").append("<p> Bob arrived to work late and was fired.</p>");

                $("#run").remove();
                $("#stay").remove();
            })

        });

        $("#uber").click(function () {

            $("#story").append("<p>Bob took a Uber and arrived to work early. You Chose wisely.</p>");

            $("#lyft").remove();
            $("#uber").remove();
        }); 

    })
// END OF NO ALARM, LATE CODE

// START OF YES ALARM, EARLY CODE

$("#early").click(function () {
        
    $("#story").append("<p>Bob woke up early and will walk to work.</p>");

    $("#late").remove();
    $("#early").remove();

  
    $("#choices").append("<button id='coffee'>Grab Coffee</button>");
    $("#choices").append("<button id='nocoffee'>No Coffee</button>");


    $("#coffee").click(function () {

        // if clicked...

        // add to the story with a sentence.
        $("#story").append("<p>Bob goes into the coffee shop and sees his old Boss, should he say Hi or get to work?</p>");

        // remove the old choice buttons
        $("#coffee").remove();
        $("#nocoffee").remove();

        $("#choices").append("<button id='hi'>Yes, Say Hi</button>");        
        $("#choices").append("<button id='nohi'>No, Go to Work</button>");

        $("#hi").click(function (){
            $("#story").append("<p> Bob says Hi to his old Boss and received a job offer for double his salary. You Chose Wisely.</p>");

            $("#hi").remove();
            $("#nohi").remove();
        });

        $("#nohi").click(function () {
            $("#story").append("<p> Bob arrived to work on time. You Chose Wisely .</p>");

            $("#hi").remove();
            $("#nohi").remove();
        });

    });

    $("#nocoffee").click(function () {

        $("#story").append("<p>Bob arrived to work early and recieved a raise. You Chose wisely.</p>");

        $("#coffee").remove();
        $("#nocoffee").remove();
    }); 

});










})