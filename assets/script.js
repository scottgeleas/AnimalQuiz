// data attributes 
// local storage
// add array of questions


// add event listener for start button
 let startBtn = document.querySelector("#startBtn");
 let quizBox = document.querySelector("#quizBox");
 let questionArray = [
  {
    question: "How long can a snail sleep?",
    answers: [
      "3 days",
      "3 weeks",
      "3 months",
      "3 years"
    ],
    correctAnswer: "3 years"
  },
  {
    question: "A group of ferrets is called:",
    answers: [
      "A meeting",
      "A class",
      "A business",
      "A fleet"
    ],
    correctAnswer: "A business"
  },
  {
    question: "Which bird CAN fly?",
    answers: [
      "penguin",
      "chicken",
      "kakapo",
      "ostrich"
    ],
    correctAnswer: "chicken"
  },
  {
      question: "Which animal breathes through their skin?",
      answers: [
       "frog",
       "cat",
       "spider",
       "sheep"
      ],
      correctAnswer: "frog"
  }
];
startBtn.addEventListener("click" , startQuiz);

// start function
function startQuiz() {
  startBtn.style.display = "none";
  generateElements(0);
}

function nextQuestion(event) {
  let questionIndex = parseInt(event.target.getAttribute("question-index"), 10)
  let answer = event.target.getAttribute("answer");
  let question = questionArray[questionIndex];
  console.log('clicked answer', answer, question.correctAnswer)
  quizBox.textContent = '';
  generateElements(questionIndex + 1);
  if (question.correctAnswer === answer) {
    let correctEl = document.createElement("h4");
    correctEl.textContent = "Correct!";
    quizBox.append(correctEl);
  } else {
      let wrongEl = document.createElement("h4");
      wrongEl.textContent = "Wrong!";
      quizBox.append(wrongEl);
    }
  
}

function generateElements(questionIndex) {
  let questionEl = document.createElement("h2");
  questionEl.textContent = questionArray[questionIndex].question;
  quizBox.append(questionEl);

  questionArray[questionIndex].answers.forEach((answer, index) => {
    let answerEl = document.createElement("h3");
    answerEl.textContent = answer;
    answerEl.setAttribute("question-index", questionIndex);
    answerEl.setAttribute("answer", answer);
    answerEl.addEventListener("click" , nextQuestion);
    quizBox.append(answerEl); 
  })
}



// let myQuestion = questionArray[0];


//     questionArray[0].question;
   
//    questionArray[0].answers.b;

//    questionArray[0].correctAnswer;





