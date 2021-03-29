// data attributes 
// local storage



// add event listener for start button
 let startBtn = document.querySelector("#startBtn");
 let quizBox = document.querySelector("#quizBox");

startBtn.addEventListener("click" , startQuiz);

// start function
function startQuiz() {
  generateElements(0)
}

function nextQuestion(event) {
  console.log(event.target)
  let targetIndex = event.target.getAttribute("next-question")

  quizBox.textContent = '';
  generateElements(targetIndex)
}

function generateElements(questionIndex) {
  let questionEl = document.createElement("h2");
  questionEl.textContent = questionArray[questionIndex].question;
  quizBox.append(questionEl);

  questionArray[questionIndex].answers.forEach((answer, index) => {
    let answerEl = document.createElement("h3");
    answerEl.textContent = answer;
    answerEl.setAttribute("next-question", parseInt(questionIndex)+1)
    answerEl.addEventListener("click" , nextQuestion)
    quizBox.append(answerEl);
  })
}



// let myQuestion = questionArray[0];

//  myQuestion =  {
//       question: "How long can a snail sleep?",
//       answers: {
//         a: "3 days",
//         b: "3 weeks",
//         c: "3 months",
//         d: "3 years"
//       },
//       correctAnswer: "d"
//     };

//     questionArray[0].question;
   
//    questionArray[0].answers.b;

//    questionArray[0].correctAnswer;


// add array of questions
let questionArray = [
    {
      question: "How long can a snail sleep?",
      answers: [
        "3 days",
        "3 weeks",
        "3 months",
        "3 years"
      ],
      correctAnswer: "d"
    },
    {
      question: "A group of ferrets is called:",
      answers: [
        "A meeting",
        "A class",
        "A business",
        "A fleet"
      ],
      correctAnswer: "c"
    },
    {
      question: "Which bird CAN fly?",
      answers: [
        "penguin",
        "chicken",
        "kakapo",
        "ostrich"
      ],
      correctAnswer: "b"
    },
    {
        question: "Which animal breathes through their skin?",
        answers: [
         "frog",
         "cat",
         "spider",
         "sheep"
        ],
        correctAnswer: "a"
    }
];

