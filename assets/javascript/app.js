$(document).ready(function () {
    //What I want to do here is construct an array called quotes that contains quote objects q1, q2...q10 and then be able to iterate through the array, displaying each quote object in order upon a state change to var isSatchel.
    // var quotes = [q1, q2,];
    // var q1 = "q1 object as below";
    // var q2 = "q2 object as below";
    // console.log (quotes[0]);
    var isSatchel = false;
    var notSatchel = false;
    var qTimer = 0;
    var qOver = false;
    var q1 = {
        qHeadline: "<h5>Question One</h5>",
        quote: "<blockquote>&quot;Don't look back, somebody might be gaining on you.&quot;</blockquote>",
        gotRight: "Yup, Satchel said that.",
        gotWrong: "Nope, Satchel didn't say that.",
        goNoTime: "Time's up.",
        //I can't get this image to display. I really want to display this image as an attribute of the q* object.
        imgGraph: "img src=images/satchel_1.php"
    };
    $("#qHeadline").html(q1.qHeadline);
    $("#qGraph").html(q1.quote);
    //This jQuery blows up all other .html writes. I really want to display this html as an attribute of the q* object.
    // $("#qButtons").html(<ul>
    //     <li>Button 1</li>
    //     <li>Button 2</li>
    // </ul>);
    $("#isSatchel").on("click", function () {
        isSatchel = true;
        qOver = true;
        displayAnswer ();
        console.log("isSatchel is " + isSatchel);
        console.log("qOver is " + qOver);
    });
    $("#notSatchel").on("click", function () {
        notSatchel = true;
        qOver = false;
        displayAnswer ();
        console.log("notSatchel is " + notSatchel);
        console.log("qOver is " + qOver);
    });
    $("#qTimer").html("Time Remaining " + qTimer + " seconds");
    //This is just a mess.
    function displayAnswer () {
        if (gotRight === true) {
        $("aGraph").html("Yes, Satchel said that");
        }
        else
        if (gotWrong === true) {
            $("aGraph").html("No, Satchel didn't say that");
        }
    };
    
    
    //I can't get this image to display
    $("#imgGraph").attr("satchel_1.php");








});
