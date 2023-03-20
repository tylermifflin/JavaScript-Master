var startquizbuttonEl = document.getElementById("startquizbutton");
var timeEl = document.getElementById("time");
var highscoreEl = document.getElementById("highscore");
var jsmasterEl = document.getElementById("jsmaster");
var question1El = document.getElementById("question1");
var question2El = document.getElementById("question2");
var question3El = document.getElementById("question3");
var question4El = document.getElementById("question4");
var resultsEl = document.getElementById("results");

var timer = "";
var results = "0, 25%, 50%, 75%, 100%";
var answerquestion1 = "boolean";
var answerquestion2 = "or"; 
var answerquestion3 = "equal";
var answerquestion4 = "and";


startquizbuttonEl.addEventListener("click", startQuizTimer);
function startQuizTimer() {
  var time = 60;
  timer = setInterval(function () {
    if (startquizbuttonEl === clicked) {
      timeEl.textContent = time;
      time--;
     startquizbuttonEl.classList.add("hide");
    jsmasterEl.classList.add("hide");
    question1El.classList.remove("hide");
    }
    question1El.addEventListener("click", function(event) {

    if (event.target.textContent === answerquestion1) {
      question1El.classList.add("hide");
      question2El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    } else {time.El.textContent = 45;
      time--;
    } 
  });
    question2El.addEventListener("click", function(event) {
    if (event.target.textContent === answerquestion2) {
      question2El.classList.add("hide");
      question3El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    }  else {time.El.textContent = 30;
      time--;
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target.textContent === answerquestion3) {
      question3El.classList.add("hide");
      question4El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    } else {time.El.textContent = 15;
    }
  });
    question4El.addEventListener("click", function(event) {
    if (question4El.classList.remove("hide")=== clicked) {
      question4El.classList.add("hide");
      resultsEl.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    }
    if (answerquestion4 !== answerquestion4) {
      time.El.textContent = 0;
      time--;
    }
    if (time === 0 || question4El.classList.remove("hide")=== clicked) {
      clearInterval(timer);
      timeEl.textContent = "0";
      resultsEl.textContent = "You got " + results;
      question1El.classList.add("hide");
      question2El.classList.add("hide");
      question3El.classList.add("hide");
      question4El.classList.add("hide");
    }
    if (answerquestion1 === "Boolean" && answerquestion2 === "Or" && answerquestion3 === "Equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[4] + "!";
    } else if (answerquestion1 === "Boolean" && answerquestion2 === Or && answerquestion3 === Equal) {
      resultsEl.textContent = "You got " + results[3] + "!";
    } else if (answerquestion1 === Boolean && answerquestion2 === Or) {
      resultsEl.textContent = "You got " + results[2] + "!";
    } else if (answerquestion1 === Boolean) {
      resultsEl.textContent = "You got " + results[1] + "!";
    } else {
      resultsEl.textContent = "You got " + results[0] + "!";
    }
  }, 1000);  
