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
var answerquestion1;
var answerquestion2;
var answerquestion3;
var answerquestion4; 



 
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
    if (time === 0 || resultsEl.setAttribute("style", "display: block")) {
      clearInterval(timerInterval); }
  }, 1000);
}

    question1El.addEventListener("click", function(event) {
      event.preventDefault();

    if (event.target === question1El.children[2]) {
      alert("correct")
      answerquestion1 === true;
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");
  

    } else if (event.target !==question1El.children[2]) {
      alert("wrong")
      answerquestion1 !== true;
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");
      

    }
  });
  
   question2El.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === question2El.children[1]) {
      alert("correct")
      answerquestion2 === true;
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
      
    }  else if (event.target !==question2El.children[1]) {
      alert("wrong")
      answerquestion2 !== true;
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
      
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target === question3El.children[4]) {
      alert("correct")
      answerquestion3 === true;
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
      
    } else if (event.target !==question3El.children[4]) {
      alert("wrong")
      answerquestion3 !== true;
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
      
    }
  });
    question4El.addEventListener("click", function(event) {
    if (event.target === question4El.children[2]) {
      alert("correct")
      answerquestion4 === true;
      question4El.setAttribute("style", "display: none");
      resultsEl.setAttribute("style", "display: block");
    } else if (event.target !==question4El.children[2]) {
      alert("wrong")
      answerquestion4 !== true;
      question4El.setAttribute("style", "display: none");
      resultsEl.setAttribute("style", "display: block");
    }
  
    if (time === 0 || resultsEl.setAttribute("style", "display: block")) {
      resultsEl.textContent = "You got " + results;
    }
    if (answerquestion1 === true && answerquestion2 === true && answerquestion3 === true && answerquestion4 === true) {
      resultsEl.textContent = "You got " + results[4] + "!";
    } else if (answerquestion1 === true && answerquestion2 === true && answerquestion3 === true && answerquestion4 !== true 
      || answerquestion1 === true && answerquestion2 === true && answerquestion3 !== true && answerquestion4 === true
      || answerquestion1 === true && answerquestion2 !== true && answerquestion3 === true && answerquestion4 === true 
      || answerquestion1 !== true && answerquestion2 === true && answerquestion3 === true && answerquestion4 === true) {
      resultsEl.textContent = "You got " + results[3] + "!";
    } else if (answerquestion1 === true && answerquestion2 === true && answerquestion3 !== true && answerquestion4 !== true || 
      answerquestion1 === true && answerquestion2 !== true && answerquestion3 === true && answerquestion4 !== true || 
      answerquestion1 === true && answerquestion2 !== true && answerquestion3 !== true && answerquestion4 === true || 
      answerquestion1 !== true && answerquestion2 === true && answerquestion3 === true && answerquestion4 !== true || 
      answerquestion1 !== true && answerquestion2 === true && answerquestion3 !== true && answerquestion4 === true || 
      answerquestion1 !== true && answerquestion2 !== true && answerquestion3 === true && answerquestion4 === true) {
      resultsEl.textContent = "You got " + results[2] + "!";
    }
    else if (answerquestion1 === true && answerquestion2 !== true && answerquestion3 !== true && answerquestion4 !== true ||
      answerquestion1 !== true && answerquestion2 === true && answerquestion3 !== true && answerquestion4 !== true ||
      answerquestion1 !== true && answerquestion2 !== true && answerquestion3 === true && answerquestion4 !== true ||
      answerquestion1 !== true && answerquestion2 !== true && answerquestion3 !== true && answerquestion4 === true) {
      resultsEl.textContent = "You got " + results[1] + "!";
    }
    else if (answerquestion1 !== true && answerquestion2 !== true && answerquestion3 !== true && answerquestion4 !== true) {
      resultsEl.textContent = "You got " + results[0] + "!";
    }

    //set local storage for highscoresEl
    localStorage.setItem("highscore", JSON.stringify(highscores));

  });

