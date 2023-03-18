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
var answer question 1 = Boolean;
var answer question 2 = Or; 
var answer question 3 = Equal;
var answer question 4 = ++;


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
    } else 



  
}
