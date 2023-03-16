var startquizbuttonEl = document.getElementById("startquizbutton");
var timeEl = document.getElementById("time");
var highscoreEl = document.getElementById("highscore");
var jsmasterEl = document.getElementById("jsmaster");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var resultsEl = document.getElementById("results");

startquizbuttonEl.addEventListener("click", startQuiz);
//how to start the quiz and the timer once the start button is clicked?
function startQuiz() {
  startquizbuttonEl.classList.add("hide");
  jsmasterEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  setTime();
}
