var startquizbuttonEl = document.getElementById("start-quiz-button");
var timeEl = document.getElementById("time");
var highscoreEl = document.getElementById("highscore");
var jsmasterEl = document.getElementById("js-master");
var question1El = document.getElementById("question1");
var question2El = document.getElementById("question2");
var question3El = document.getElementById("question3");
var question4El = document.getElementById("question4");
var resultsEl = document.getElementById("results");

var results = [0, 25, 50, 75, 100];
  var answerquestion1 = "boolean";
  var answerquestion2 = "or"; 
  var answerquestion3 = "equal";
  var answerquestion4 = "and";



startquizbuttonEl.addEventListener("click", function(event) {
  event.preventDefault();
  startquizbutton();
  startquizbuttonEl.classList.add(".hide");
  if (event.target === startquizbuttonEl){
    alert("test your knowledge of javascript");
   question1El.setAttribute("style", "display: block");
}
});
 
function startquizbutton() {
  var time = 60;
  var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = time;
  }, 1000);
}

    question1El.addEventListener("click", function(event) {
      event.preventDefault();

    if (event.target === question1El.children[2]) {
      alert("correct")
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");
    } else if (event.target !==question1El.children[2]) {
      alert("wrong")
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");

    }
  });
  
   question2El.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === question2El.children[1]) {
      alert("correct")
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
    }  else if (event.target !==question2El.children[1]) {
      alert("wrong")
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target === question3El.children[4]) {
      alert("correct")
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
    } else if (event.target !==question3El.children[4]) {
      alert("wrong")
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
    }
  });
    question4El.addEventListener("click", function(event) {
    if (event.target.textContent === question4El.children[2]) {
      alert("correct")
      question4El.classList.add(".hide");
      resultsEl.classList.remove(".hide");
    } else if (event.target.textContent !==question4El.children[2]) {
      alert("wrong")
      question4El.classList.add(".hide");
      resultsEl.classList.remove(".hide");
    }
  
    if (timeEl.textContent = 0 || question4El.classList.contains(".hide")) {
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

