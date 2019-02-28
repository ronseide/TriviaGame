$(document).ready(function () {
    var qTimer = 10;
    var stopTimer;
    var qOver = false;
    var aTimer = 0;
    // var aTimer = setInterval(timerForA, 1000);
    var userScore = 0;
    var currentQuestion = 0;
    var questions = [{
        qHeadline: "Question One",
        quote: "<blockquote>&quot;Don't look back, somebody might be gaining on you.&quot;</blockquote>",
        isSatchel: true,
        gotRight: "Q1 got right",
        gotWrong: "Q1 got wrong",
        goNoTime: "Time's up.",
        image: "assets/images/satchel_1.php"
    },
    {
        qHeadline: "Question Two",
        quote: "<blockquote>&quot;The heart wants what it wants.&quot;</blockquote>",
        isSatchel: false,
        gotRight: "Q2 got right",
        gotWrong: "Q2 got wrong",
        goNoTime: "Time's up.",
        image: "assets/images/emilyD.jpg"
    },
    {
        qHeadline: "Question Three",
        quote: "&quot;The business of America is business.&quot;",
        isSatchel: false,
        gotRight: "Q3 got right",
        gotWrong: "Q3 got wrong",
        goNoTime: "Time's up.",
        image: "assets/images/calvinC.jpg"
    },
    {
        qHeadline: "Question Four",
        quote: "<blockquote>&quot;Avoid fried foods.&quot;</blockquote>",
        isSatchel: true,
        gotRight: "Q4 got right",
        gotWrong: "Q4 got wrong",
        goNoTime: "Time's up.",
        image: "assets/images/satchel_1.php"
    },
    ];
    $("#startGame").on("click", function () {
        displayQuestion()
        qTimedCount ();
    });
    $("#qButtons").on("click", "#isSatchel", function () {
        if (questions[currentQuestion].isSatchel === true) {
            $("#aGraph").html(questions[currentQuestion].gotRight);
            userScore++;
            $("#aTimer").html("Time Remaining " + aTimer + " seconds");
            $("#imgGraph").attr("src", questions[currentQuestion].image);
            clearTimeout (stopTimer);
            if (userScore < 3) {
                $("#userScore").html("Your score is " + userScore);
            }
            else
                $("#userScore").html("Game Over, you got " + userScore + " right");
            currentQuestion++;

            //A call to a timer function for aTimer would go here and would call function displayQuestion when aTimer === 0
        }
        else
            if (questions[currentQuestion].isSatchel !== true) {
                $("#aGraph").html(questions[currentQuestion].gotWrong);
                $("#aTimer").html("Time Remaining " + aTimer + " seconds");
                $("#imgGraph").attr("src", questions[currentQuestion].image);
                clearTimeout (stopTimer);
                currentQuestion++;
                //A call to a timer function for aTimer would go here and would call function displayQuestion when aTimer === 0

            }
        //A timer for qTimer would go here as the third option to end the question.

    });
    $("#qButtons").on("click", "#notSatchel", function () {
        if (questions[currentQuestion].isSatchel === true) {
            $("#aGraph").html(questions[currentQuestion].gotWrong);
            $("#aTimer").html("Time Remaining " + aTimer + " seconds");
            $("#imgGraph").attr("src", questions[currentQuestion].image);
            clearTimeout (stopTimer);
            currentQuestion++;
            //A call to a timer function for aTimer would go here and would call function displayQuestion when aTimer === 0

        }
        else
            if (questions[currentQuestion].isSatchel !== true) {
                $("#aGraph").html(questions[currentQuestion].gotRight);
                userScore++;
                $("#aTimer").html("Time Remaining " + aTimer + " seconds");
                $("#imgGraph").attr("src", questions[currentQuestion].image);
                clearTimeout (stopTimer);
                //A call to a timer function for aTimer would go here and would call function displayQuestion when aTimer === 0

                if (userScore < 3) {
                    $("#userScore").html("Your score is " + userScore);
                }
                else
                    $("#userScore").html("Game Over, you got " + userScore + " right");
                currentQuestion++;
            }
        //A timer for qTimer would go here as the third option to end the question.
    });
    $("#newQuestion").on("click", function () {
        displayQuestion()
        qTimer = 10;
        qTimedCount();

    });
    function qTimedCount() {
        $(".qTimer").text("Time Remaining: " + qTimer);
        console.log("Timer is " + qTimer);
         qTimer --;
         stopTimer = setTimeout(qTimedCount, 1000);
    }
    function aTimedCount() {
        $(".qTimer").text("Time Remaining: " + aTimer);
        console.log("Timer is " + aTimer);
         aTimer --;
         stopTimer = setTimeout(qTimedCount, 1000);
    }


    function displayQuestion() {
        $("#qHeadline").html(questions[currentQuestion].qHeadline);
        $("#qGraph").html(questions[currentQuestion].quote);
        $("#qButtons").html(
            `<ul>
            <li><label><input type="radio" name="optradio" id="isSatchel">&nbsp;&nbsp;That sounds like Satchel</label></li>
            <li><label><input type="radio" name="optradio" id="notSatchel">&nbsp;&nbsp;That doesn't sound like Satchel</label></li>
        </ul>`
        );
        $("#aGraph").html("");
        $("#aTimer").html("");
        $("#imgGraph").attr("src", "assets/images/white.jpg");
        $("#qTimer").html("Time Remaining " + qTimer + " seconds");
    };
});
