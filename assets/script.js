// add event listener for start button
 let startBtn = document.querySelector("#startBtn");
 startBtn.addEventListener("click" , startQuiz());
// start function
startQuiz()

// add array of questions
let questions = [
    {
      question: "How long can a snail sleep?",
      answers: {
        a: "3 days",
        b: "3 weeks",
        c: "3 months",
        d: "3 years"
      },
      correctAnswer: "d"
    },
    {
      question: "A group of ferrets is called:",
      answers: {
        a: "A meeting",
        b: "A class",
        c: "A business",
        d: "A fleet"
      },
      correctAnswer: "c"
    },
    {
      question: "Which bird CAN fly?",
      answers: {
        a: "penguin",
        b: "chicken",
        c: "kakapo",
        d: "ostrich"
      },
      correctAnswer: "b"
    }
    {
        question: "Which animal breathes through their skin?",
        answers: {
          a: "frog",
          b: "cat",
          c: "spider",
          d: "sheep"
        },
        correctAnswer: "a"
    }
];

