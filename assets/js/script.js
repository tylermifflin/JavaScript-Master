var startquizbuttonEl = document.getElementById("start-quiz-button");
var timeEl = document.getElementById("time");
var highscoreEl = document.getElementById("highscore");
var savehighscoreEl = document.getElementById("savehighscore");
var enterinitialsEl = document.getElementById("enterinitials");
var initialsEl = document.getElementById("initials");
var jsmasterEl = document.getElementById("js-master");
var question1El = document.getElementById("question1");
var question2El = document.getElementById("question2");
var question3El = document.getElementById("question3");
var question4El = document.getElementById("question4");
var resultsEl = document.getElementById("results");

var score = 0;
var scoreoptions = [0, 25, 50, 75, 100];
var answerquestion1 = question1El.children[2];
var answerquestion2 = question2El.children[1];
var answerquestion3 = question3El.children[4];
var answerquestion4 = question4El.children[2];


 
startquizbuttonEl.addEventListener("click", function(event) {
  event.preventDefault();
  startquizbutton();
  startquizbuttonEl.classList.add(".hide");
  if (event.target === startquizbuttonEl){
    alert("test your knowledge of javascript");
   question1El.setAttribute("style", "display: block");
   startquizbuttonEl.setAttribute("style", "display: none");
}
});

function startquizbutton() {
  var time = 20;
  var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      clearInterval(timerInterval);
     } 
     if (resultsEl.setAttribute("style", "display: block")) {
      clearInterval(timerInterval);}
  }, 1000);
}

function displayScore() {
  resultsEl.setAttribute("style", "display: block")
  resultsEl.textContent = + score + " out of 100";
  enterinitialsEl.setAttribute("style", "display: block");
  initialsEl.setAttribute("style", "display: block");
  savehighscoreEl.setAttribute("style", "display: block");
}

  savehighscoreEl.addEventListener("click", function(event) {
    event.preventDefault();
  var initials = initialsEl.value;
  if (initials) {
  var highscore = {
    initials: initials,
    score: score
  }
  localStorage.setItem("highscore", JSON.stringify(highscore));
  highscoreEl.textContent = initials + " " + score;
  }
  });

    question1El.addEventListener("click", function(event) {
      event.preventDefault();

    if (event.target === question1El.children[2]) {
      alert("correct")
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");
      score += scoreoptions[1];
      
  

    } else if (event.target !==question1El.children[2]) {
      alert("wrong")
      question1El.setAttribute("style", "display: none");
      question2El.setAttribute("style", "display: block");
      score += scoreoptions[0];
      if (event.target !==question1El.children[2]) {
        time-=5;
      }
      
      

    }
  });
  
   question2El.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === question2El.children[1]) {
      alert("correct")
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
      score += scoreoptions[1];
      
      
    }  else if (event.target !==question2El.children[1]) {
      alert("wrong")
      question2El.setAttribute("style", "display: none");
      question3El.setAttribute("style", "display: block");
      score += scoreoptions[0];
      if (event.target !==question2El.children[1]) {
        time-=5;
      }
      

      
    }
  });
    question3El.addEventListener("click", function(event) {
    if (event.target === question3El.children[4]) {
      alert("correct")
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
      score += scoreoptions[1];
      
      
    } else if (event.target !==question3El.children[4]) {
      alert("wrong")
      question3El.setAttribute("style", "display: none");
      question4El.setAttribute("style", "display: block");
      score += scoreoptions[0];
      if (event.target !==question3El.children[4]) {
        time-=5;
      }
      
      
    }
  });
    question4El.addEventListener("click", function(event) {
    if (event.target === question4El.children[2]) {
      alert("correct")
      question4El.setAttribute("style", "display: none");
      resultsEl.setAttribute("style", "display: block");
      score += scoreoptions[1];
      displayScore();

    } else if (event.target !==question4El.children[2]) {
      alert("wrong")
      question4El.setAttribute("style", "display: none");
      resultsEl.setAttribute("style", "display: block");
      score += scoreoptions[0];
      displayScore();
    }
  }
  );

