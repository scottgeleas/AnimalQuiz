let startBtn = document.querySelector("#startBtn");
let quizBox = document.querySelector("#quizBox");
let timerEl = document.querySelector("#timer");

let currentTime = parseInt(timerEl.textContent);

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
  },
  {
    question: "What country is the only native home for lemurs?",
    answers: [
      "New Zealand",
      "Papua New Guinea",
      "Solomon Islands",
      "Madagascar"
    ],
    correctAnswer: "Madagascar"
  },
  {
    question: "Which animal is a Portuguese Man O War?",
    answers: [
      "snake",
      "crab",
      "jellyfish",
      "stingray"
    ],
    correctAnswer: "jellyfish"
  }
];
startBtn.addEventListener("click", startQuiz);

// start function
function startQuiz() {
  startBtn.style.display = "none";

  setInterval(function () {
    currentTime--;
    timerEl.textContent = currentTime;
  }, 1000)

  // calls generateElements to display the FIRST question
  generateElements(0);
}

// renders the Question text and Answers
function generateElements(questionIndex) {
  let questionEl = document.createElement("h2");

  // change the text of the created H2 to the value of "question" of the question object
  questionEl.textContent = questionArray[questionIndex].question;
  quizBox.append(questionEl);

  // loop through each of the "answers"
  questionArray[questionIndex].answers.forEach((answer) => {
    // for each single answer, we do this:
    let answerEl = document.createElement("h3");
    answerEl.textContent = answer;

    // we give the h3 an extra attribute called "question-index", with value equals to questionIndex
    answerEl.setAttribute("question-index", questionIndex);
    // we give the h3 an extra attribute called "answer", with value equals to answer
    answerEl.setAttribute("answer", answer);
    // we set an event listener that listens for a "click" action on this h3 element
    answerEl.addEventListener("click", nextQuestion);

    quizBox.append(answerEl);
  })
}

// displays the NEXT question of whatever was clicked on
function nextQuestion(event) {
  // the local questionIndex will be the same as the generateElemnets questionIndex
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
    function hideElement() {
      correctEl.remove();
    }
    setTimeout(hideElement, 1000);
  } else {
    let wrongEl = document.createElement("h4");
    wrongEl.textContent = "Wrong!";
    quizBox.append(wrongEl);
    function hideElement() {
      wrongEl.remove();
    }
    setTimeout(hideElement, 1000);
    currentTime -= 5;
  }





  // if ((currentTime <= 0) || (questionIndex > 5))
  //   endQuiz()
}

// end function
// function endQuiz {
//   console.log("end")
// }
//  validate timer
