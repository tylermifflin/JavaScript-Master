var startquizbuttonEl = document.getElementById('startquizbutton');
var timeEl = document.getElementById('time');
var highscoreEl = document.getElementById('highscore');
var jsmasterEl = document.getElementById('jsmaster');
var question1El = document.getElementById('question1');
var question2El = document.getElementById('question2');
var question3El = document.getElementById('question3');
var question4El = document.getElementById('question4');
var resultsEl = document.getElementById('results');

var timer = "";
var results = [0, 25, 50, 75, 100];
var answerquestion1 = "boolean";
var answerquestion2 = "or"; 
var answerquestion3 = "equal";
var answerquestion4 = "and";


startquizbuttonEl.addEventListener("click", startQuizTimer); 
 
function startQuizTimer() {
  var time = 60;
  timer = setInterval(function () {
      timeEl.textContent = time;
      time--;
     startquizbuttonEl.classList.add("hide");
    jsmasterEl.classList.add("hide");
    question1El.classList.remove("hide");
    
    question1El.addEventListener("click", function(event) {

    if (event.target.textContent === answerquestion1) {
      question1El.classList.add("hide");
      question2El.classList.remove("hide");
    } else {timeEl.textContent = 45;
      time--;
    } 
  });
    question2El.addEventListener("click", function(event) {
    if (event.target.textContent === answerquestion2) {
      question2El.classList.add("hide");
      question3El.classList.remove("hide");
    }  else {timeEl.textContent = 30;
      time--;
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target.textContent === answerquestion3) {
      question3El.classList.add("hide");
      question4El.classList.remove("hide");
    } else {timeEl.textContent = 15;
    }
  });
    question4El.addEventListener("click", function(event) {
    if (event.target.textContent === answerquestion4) {
      question4El.classList.add("hide");
      resultsEl.classList.remove("hide");
    } else {timeEl.textContent = 0;
    }
  
    if (time === 0 || question4El.classList.contains("hide")) {
      clearInterval(timer);
      timeEl.textContent = "0";
      resultsEl.textContent = "You got " + results;
      question1El.classList.add("hide");
      question2El.classList.add("hide");
      question3El.classList.add("hide");
      question4El.classList.add("hide");
    }
    if (answerquestion1 === "boolean" && answerquestion2 === "0r" && answerquestion3 === "equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[4] + "!";
    } else if (answerquestion1 === "boolean" && answerquestion2 === "or" && answerquestion3 === "equal") {
      resultsEl.textContent = "You got " + results[3] + "!";
    } else if (answerquestion1 === "boolean" && answerquestion2 === "or") {
      resultsEl.textContent = "You got " + results[2] + "!";
    } else if (answerquestion1 === "boolean") {
      resultsEl.textContent = "You got " + results[1] + "!";
    } else {
      resultsEl.textContent = "You got " + results[0] + "!";
    }
  }, 1000);  
});
} 
