// I made variables for all the elements I needed to manipulate, i created unique ids in HTML and used getElementById to target them
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
// I created an array of the possible scores for each question, started score at 0, and created variables for each answer
var score = 0;
var scoreoptions = [0, 25, 50, 75, 100];
var answerquestion1 = question1El.children[2];
var answerquestion2 = question2El.children[1];
var answerquestion3 = question3El.children[4];
var answerquestion4 = question4El.children[2];

// I created an event listener for the start quiz button, and used the startquizbutton function to start the timer, used if statement to hide start button and make question 1 visible
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
// I created a function to start the timer, and used an if statement to stop the timer when the results are displayed
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
// I created a function to display the score once question 4 is answered
function displayScore() {
  resultsEl.setAttribute("style", "display: block")
  resultsEl.textContent = + score + " out of 100";
  enterinitialsEl.setAttribute("style", "display: block");
  initialsEl.setAttribute("style", "display: block");
  savehighscoreEl.setAttribute("style", "display: block");
}
// I created an event listener for the save high score button, and used an if statement to make sure the user enters initials before saving the score
  savehighscoreEl.addEventListener("click", function(event) {
    event.preventDefault();
  var initials = initialsEl.value;
  if (initials) {
  var highscore = {
    initials: initials,
    score: score
  } // I used JSON.stringify to convert the highscore object into a string, and used localStorage.setItem to save the highscore string to local storage
  localStorage.setItem("highscore", JSON.stringify(highscore));
  highscoreEl.textContent = initials + " " + score;
  }
  });
// I created an event listener for question 1, and used an if statement to check if the user clicked the correct answer, and if so, add 25 points to the score, and hide question 1 and make question 2 visible, -5 seconds if wrong answer is clicked
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
 // I created an event listener for question 2, and used an if statement to check if the user clicked the correct answer, and if so, add 25 points to the score, and hide question 2 and make question 3 visible, -5 seconds if wrong answer is clicked 
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
// I created an event listener for question 3, and used an if statement to check if the user clicked the correct answer, and if so, add 25 points to the score, and hide question 3 and make question 4 visible, -5 seconds if wrong answer is clicked
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
// I created an event listener for question 4, and used an if statement to check if the user clicked the correct answer, and if so, add 25 points to the score, and hide question 4 and make results visible, also call the displayScore function to display the score
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

