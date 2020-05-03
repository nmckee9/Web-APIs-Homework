var startButton = document.querySelector(".startButton")
var timeEl = document.querySelector(".timetracker");
var mainEl = document.getElementById("quiz-Content");
var myForm = document.querySelector("#options")
var answers = document.querySelector("#answers")
var currentQuestion = 0;
var correctAnswers = 0;

var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 2
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: 3
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: 3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: 3
  }
];

//When Start Button is Clicked Run Question Function
startButton.addEventListener("click", function(){
    showQuestion(currentQuestion);
    startTimer();
})

myForm.addEventListener("submit", function(e) {
  e.preventDefault();
  //evaluate answer
  showQuestion(currentQuestion);
})

//Timer Function
var secondsLeft = 60

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to finish quiz";
  }, 1000)

  if(secondsLeft === 0) {
    alert("Quiz Finished");
  }
}


function showQuestion(index) {
  if (index === quizQuestions.length) {
    showResults();
  } else {
    document.getElementById("question").innerHTML = quizQuestions[index].question;
    let answer;
    let myLabel;
    answers.innerHTML= ""
    let br; 
            //confused how to get if/else statement to pull from this
    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
      answer = document.createElement("input");
      answer.setAttribute("type", "radio");
      answer.setAttribute("value", i);
      answer.setAttribute("name", "answer")
      answer.setAttribute("id", "answer" + i)
      myLabel = document.createElement("label");
      myLabel.setAttribute("for", "answer" + i);
      myLabel.innerHTML = quizQuestions[index].choices[i];
      br = document.createElement("br")
      answers.appendChild(answer);
      answers.appendChild(myLabel);
      answers.appendChild(br);  
    } 
    currentQuestion++;
    correctAnswers++;
  }
}


function showResults () {
  alert("We're Done")
}



// for (let i= 0; i < quizQuestions.length; i++) {
//   question = questions[i][0];
//   answer = questions [i][2];
//   response
//   if ( question === answer){
//     correctAnswer = "Yay! You got it right!"
//     correctAnswers+= 1;
//   }
//   else( question == answer)
//   {
//         wrongAnswer = "Wrong!”;

// }





//1. Register event listener for start button
//Display question of radio buttons
//if current question = currentQuestions.length invoke show results
//event listener on form
//get value of radio button 
//compare to quiz object
//if correct, increment counter (corrects answer)
//show results 
