var startquizbuttonEl = document.getElementById("startquizbutton");
var timeEl = document.getElementById("time");
var highscoreEl = document.getElementById("highscore");
var jsmasterEl = document.getElementById("jsmaster");
var question1El = document.getElementById("question1");
var question2El = document.getElementById("question2");
var question3El = document.getElementById("question3");
var question4El = document.getElementById("question4");
var answersEl = document.getElementById("answers");
var resultsEl = document.getElementById("results");

var timer = "";
var results = "0, 25%, 50%, 75%, 100%";
var answerquestion1 = "Boolean";
var answerquestion2 = "Or"; 
var answerquestion3 = "Equal";
var answerquestion4 = "++";


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
    if (question1El.classList.remove("hide")=== clicked) {
      question1El.classList.add("hide");
      question2El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    } 
    if (answerquestion1 !== answerquestion1) {
      time.El.textContent = 45;
      time--;
    } else {time.El.textContent = time;
      time--;
    } 
    if (question2El.classList.remove("hide")=== clicked) {
      question2El.classList.add("hide");
      question3El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    }  
    if (answerquestion2 !== answerquestion2) {
      time.El.textContent = 30;
      time--;
    }
    if (question3El.classList.remove("hide")=== clicked) {
      question3El.classList.add("hide");
      question4El.classList.remove("hide");
      timeEl.textContent = time;
      time--;
    }
    if (answerquestion3 !== answerquestion3) {
      time.El.textContent = 15;
      time--;
    }
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
    if (answerquestion1 === Boolean && answerquestion2 === Or && answerquestion3 === Equal && answerquestion4 === ++) {
      resultsEl.textContent = "You got " + results[4] + "!";
    } else if (answerquestion1 === Boolean && answerquestion2 === Or && answerquestion3 === Equal) {
      resultsEl.textContent = "You got " + results[3] + "!";
    } else if (answerquestion1 === Boolean && answerquestion2 === Or) {
      resultsEl.textContent = "You got " + results[2] + "!";
    } else if (answerquestion1 === Boolean) {
      resultsEl.textContent = "You got " + results[1] + "!";
    } else {
      resultsEl.textContent = "You got " + results[0] + "!";
    }
  }, 1000);  
}

