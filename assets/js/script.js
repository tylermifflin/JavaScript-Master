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

startquizbuttonEl.addEventListener("click", startQuiz);
//how to start the quiz and the timer once the start button is clicked?
function startQuiz() {
  startquizbuttonEl.classList.add("hide");
  jsmasterEl.classList.add("hide");
  question1El.classList.remove("hide");
  setTime();
}
