$(document).ready(function () {
    //What I want to do here is construct an array called quotes that contains quote objects q1, q2...q10 and then be able to iterate through the array, displaying each quote object in order upon a state change to var isSatchel.
    // var quotes = [q1, q2,];
    // var q1 = "q1 object as below";
    // var q2 = "q2 object as below";
    // console.log (quotes[0]);
    var qTimer = 0;
    var qOver = false;
    var aTime = 0;
    var response ;
    var currentQuestion = 0;
    var questions = [{
        qHeadline: "Question One",
        quote: "<blockquote>&quot;Don't look back, somebody might be gaining on you.&quot;</blockquote>",
        isSatchel : true,
        gotRight: "Yup, Satchel said that.",
        gotWrong: "Nope, Satchel didn't say that.",
        goNoTime: "Time's up.",
        image: "assets/images/satchel_1.php"
    },
        {
        qHeadline: "Question One",
        quote: "<blockquote>&quot;Don't look back, somebody might be gaining on you.&quot;</blockquote>",
        isSatchel : true,
        gotRight: "Yup, Satchel said that.",
        gotWrong: "Nope, Satchel didn't say that.",
        goNoTime: "Time's up.",
        image: "assets/images/satchel_1.php"
    },
];

    $("#startGame").on("click", function() {
        // $("#qHeadline").addClass("invisible");
        displayQuestion ();
    });
    $("#qHeadline").html(questions[currentQuestion].qHeadline);
    $("#qGraph").html(questions[currentQuestion].quote);
    $("#qButtons").html(
        `<ul>
            <li><label><input type="radio" name="optradio" id="isSatchel">&nbsp;&nbsp;That sounds like Satchel</label></li>
            <li><label><input type="radio" name="optradio" id="notSatchel">&nbsp;&nbsp;That doesn't sound like Satchel</label></li>
        </ul>`
        );
    $("#isSatchel").on("click", function () {
        if (questions[currentQuestion].isSatchel === true) {
            console.log(questions[currentQuestion].gotRight);
            currentQuestion ++;
            displayQuestion ();
        }
        else
            console.log(q1.gotWrong);
        // displayAnswer ();
    });
    function displayQuestion () {
        console.log("hello displayQuestion")
        $()
    };
    $("#qTimer").html("Time Remaining " + qTimer + " seconds");
    //This is just a mess.
    // function displayAnswer () {
    //     if (gotRight === true) {
    //     $("aGraph").html("Yes, Satchel said that");
    //     }
    //     else
    //     if (gotWrong === true) {
    //         $("aGraph").html("No, Satchel didn't say that");
    //     }
    // };
    
    

    $("#imgGraph").attr("src", questions[currentQuestion].image);








});
