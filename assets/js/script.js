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
var answerquestion4 = "++"";


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
    if (answerquestion1 +== Boolean) {
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
    if (answerquestion2 +== Or) {
      time.El.textContent = 30;
      time--;
    }



  
}
