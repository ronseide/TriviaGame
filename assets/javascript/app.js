$(document).ready(function () {
    var qTimer = 10;
    var stopTimer;
    var userScore = 0;
    var currentQuestion = 0;
    var questions = [
        //     {
        //     qHeadline: "Introduction",
        //     quote: `<p>For each quote, guess if Satchel said it or someone else Press the start button to begin!<br><label><button type="button" id="startButton" class="btn btn-light">Start</button></label></p>`,
        //     isSatchel: true,
        //     gotRight: "Yup, Satchel said that.",
        //     gotWrong: "Nope, Satchel said that.",
        //     gotNoTime: "Time's up, Satchel said that.",
        //     image: "assets/images/satchel_1.php"
        // },
        {
            qHeadline: "Question One",
            quote: "&quot;Don't look back. Something might be gaining on you.&quot;</blockquote>",
            isSatchel: true,
            gotRight: "Yup, Satchel said that.",
            gotWrong: "Nope, Satchel said that.",
            gotNoTime: "Time's up, Satchel said that.",
            image: "assets/images/satchel_2.jpg"
        },
        {
            qHeadline: "Question Two",
            quote: "&quot;The heart wants what it wants.&quot;",
            isSatchel: false,
            gotRight: "Yup, Emily Dickenson said that.",
            gotWrong: "Nope, Emily Dickenson said that.",
            gotNoTime: "Time's up, Emily Dickenson said that.",
            image: "assets/images/emilyD.jpg"
        },
        {
            qHeadline: "Question Three",
            quote: "&quot;The business of America is business.&quot;",
            isSatchel: false,
            gotRight: "Yup, Calvin Coolidge said that.",
            gotWrong: "Nope, Calvin Cooldige said that.",
            gotNoTime: "Time's up, Calvin Coolidge said that.",
            image: "assets/images/calvinC.jpg"
        },
        {
            qHeadline: "Question Four",
            quote: "&quot;Don't eat fried food, it angries up the blood.&quot;",
            isSatchel: true,
            gotRight: "Yup, Satchel said that.",
            gotWrong: "Nope, Satchel said that.",
            gotNoTime: "Time's up, Satchel said that.",
            image: "assets/images/satchel_3.jpg"
        },
        {
            qHeadline: "Question Five",
            quote: "&quot;Nutrition is so important. It can't be stressed enough.&quot;",
            isSatchel: false,
            gotRight: "Yup, The Rock said that.",
            gotWrong: "Nope, The Rock said that.",
            gotNoTime: "Time's up, Satchel said that.",
            image: "assets/images/dwayneJ.jpg"
        },
        {
            qHeadline: "Question Six",
            quote: "&quot;I don't generally like running. I believe in training by rising gently up and down from the bench.&quot;",
            isSatchel: true,
            gotRight: "Yup, Satchel said that.",
            gotWrong: "Nope, Satchel said that.",
            gotNoTime: "Time's up, Satchel said that.",
            image: "assets/images/satchel_4.jpg"
        },

        {
            qHeadline: "GAME OVER",
            quote: "&quot;You're the best.&quot;",
            isSatchel: true,
            gotRight: "Yup, Satchel said that.",
            gotWrong: "Nope, Satchel said that.",
            gotNoTime: "Time's up, Satchel said that.",
            image: "assets/images/satchel_1.php"
        }
    ];

    $("#startGame").on("click", function () {
        displayQuestion()
    });

    $("#qButtons").on("click", "#isSatchel", function () {
        if (qTimer <= 0) { //don't let the user guess if the time is up!
            return;
        }
        if (questions[currentQuestion].isSatchel === true) {
            rightAnswer();
        }
        else if (questions[currentQuestion].isSatchel !== true) {
            wrongAnswer();
        }
    });
    $("#qButtons").on("click", "#notSatchel", function () {
        if (qTimer <= 0) { //don't let the user guess if the time is up!
            return;
        }
        if (questions[currentQuestion].isSatchel === true) {
            wrongAnswer();
        }
        else if (questions[currentQuestion].isSatchel !== true) {
            rightAnswer();
        }
    });
    $("#startButton").on("click", function () {
        currentQuestion = 0;
        displayQuestion();
    });

    function answeredQuestion() {
        $("#aTimer").html("Time Remaining " + aTimer + " seconds");
        $("#qTimer").html("");
        $("#imgGraph").attr("src", questions[currentQuestion].image);
        qTimer = 0;
        timedCount();
    }

    function rightAnswer() {
        answeredQuestion();
        $("#aGraph").html(questions[currentQuestion].gotRight);
        userScore++;
    }

    function wrongAnswer() {
        answeredQuestion();
        $("#aGraph").html(questions[currentQuestion].gotWrong);
    }
    
    function timedCount() {
        clearTimeout(stopTimer);
        qTimer--;
        if (qTimer > 0) {
            $("#qTimer").html("Time Remaining " + qTimer + " seconds");
        }
        else if (qTimer == 0) {
            wrongAnswer();
            $("#aGraph").html(questions[currentQuestion].gotNoTime);
            return;
        }
        else {
            $("#aTimer").html("Time Remaining " + (6 + qTimer) + " seconds");
            if (6 + qTimer == 0) {
                qTimer = 11;
                currentQuestion++;
                if (currentQuestion < 6) {
                    displayQuestion();
                }
                else {
                    $("#qHeadline").html("GAME OVER!");
                    $("#qGraph").html("")
                    $("#qButtons").html("You got " + userScore + " out of " + currentQuestion + " right. Refresh your browser to play again!");
                    $("#userScore").html("");
                    //currentQuestion = 0;
                    //userScore = 0;
                    // displayQuestion();
                    clearTimeout(stopTimer);
                    return;
                }
            }
        }
        stopTimer = setTimeout(timedCount, 1000);
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
        $("#userScore").html("Your score is " + userScore);
        $("#imgGraph").attr("src", "assets/images/white.jpg");
        $("#qTimer").html("Time Remaining " + qTimer + " seconds");
        qTimer = 11;
        timedCount();
    };
});
