var startquizbuttonEl = document.querySelector('#startquizbutton');
var timeEl = document.getElementById('time');
var highscoreEl = document.getElementById('highscore');
var jsmasterEl = document.getElementById('jsmaster');
var question1El = document.getElementById('question1');
var question2El = document.getElementById('question2');
var question3El = document.getElementById('question3');
var question4El = document.getElementById('question4');
var resultsEl = document.getElementById('results');




startquizbuttonEl.addEventListener("click", function(event) {
  event.preventDefault();
  startquizbutton();
}); 
 
function startquizbutton() {
  var time = 60;
  var results = [0, 25, 50, 75, 100];
  var answerquestion1 = "boolean";
  var answerquestion2 = "or"; 
  var answerquestion3 = "equal";
  var answerquestion4 = "and";
  timer = setInterval(function () {
      timeEl.textContent = time;
      time--;
     startquizbuttonEl.classList.add("hide");
    jsmasterEl.classList.add("hide");
    question1El.classList.remove("hide");
    if (time === 0)
      clearInterval(timer);
  }, 1000);
}

    question1El.addEventListener("click", function(event) {

    if (event.target.textContent === question1El.children[2]) {
      question1El.classList.add("hide");
      question2El.classList.remove("hide");
    } else {timeEl.textContent = 45;
      time--;
      question1El.classList.add("hide");
      question2El.classList.remove("hide");
    } 
  });
    question2El.addEventListener("click", function(event) {
    if (event.target.textContent === question2El.children[1]) {
      question2El.classList.add("hide");
      question3El.classList.remove("hide");
    }  else {timeEl.textContent = 30;
      time--;
      question2El.classList.add("hide");
      question3El.classList.remove("hide");
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target.textContent === question3El.children[4]) {
      question3El.classList.add("hide");
      question4El.classList.remove("hide");
    } else {timeEl.textContent = 15;
      time--;
      question3El.classList.add("hide");
      question4El.classList.remove("hide");
    }
  });
    question4El.addEventListener("click", function(event) {
    if (event.target.textContent === question4El.children[2]) {
      question4El.classList.add("hide");
      resultsEl.classList.remove("hide");
    } else {timeEl.textContent = 0;
      time--;
    }
  
    if (timeEl.textContent = 0 || question4El.classList.contains("hide")) {
      resultsEl.textContent = "You got " + results;
    }
    if (answerquestion1 === "boolean" && answerquestion2 === "0r" && answerquestion3 === "equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[4] + "!";
    } else if (answerquestion1 === "boolean" && answerquestion2 === "or" && answerquestion3 === "equal" && answerquestion4 !== "++" || answerquestion1 === "boolean" && answerquestion2 === "or" && answerquestion3 !== "equal" && answerquestion4 === "++" || answerquestion1 === "boolean" && answerquestion2 !== "or" && answerquestion3 === "equal" && answerquestion4 === "++" || answerquestion1 !== "boolean" && answerquestion2 === "or" && answerquestion3 === "equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[3] + "!";
    } else if (answerquestion1 === "boolean" && answerquestion2 === "or" && answerquestion3 !== "equal" && answerquestion4 !== "++" || answerquestion1 === "boolean" && answerquestion2 !== "or" && answerquestion3 === "equal" && answerquestion4 !== "++" || answerquestion1 === "boolean" && answerquestion2 !== "or" && answerquestion3 !== "equal" && answerquestion4 === "++" || answerquestion1 !== "boolean" && answerquestion2 === "or" && answerquestion3 === "equal" && answerquestion4 !== "++" || answerquestion1 !== "boolean" && answerquestion2 === "or" && answerquestion3 !== "equal" && answerquestion4 === "++" || answerquestion1 !== "boolean" && answerquestion2 !== "or" && answerquestion3 === "equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[2] + "!";
    } else if (answerquestion1 === "boolean" && answerquestion2 !== "or" && answerquestion3 !== "equal" && answerquestion4 !== "++" || answerquestion1 !== "boolean" && answerquestion2 === "or" && answerquestion3 !== "equal" && answerquestion4 !== "++" || answerquestion1 !== "boolean" && answerquestion2 !== "or" && answerquestion3 === "equal" && answerquestion4 !== "++" || answerquestion1 !== "boolean" && answerquestion2 !== "or" && answerquestion3 !== "equal" && answerquestion4 === "++") {
      resultsEl.textContent = "You got " + results[1] + "!";
    } else {
      resultsEl.textContent = "You got " + results[0] + "!";
    }
  });
