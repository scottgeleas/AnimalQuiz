let title = document.querySelector("#title")
let startBtn = document.querySelector("#startBtn");
let timerEl = document.querySelector("#timer");
let quizBox = document.querySelector("#quizBox");
let resultsBox = document.querySelector("#results");
let currentTime = parseInt(timerEl.textContent);
let stopTime;
let save = document.querySelector('#save');
let scoresArray = localStorage.getItem('highscores');
let userScore = 0;
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
    },
    {
        question: "How often do sloths need to use the bathroom?",
        answers: [
            "every hour",
            "once a day",
            "twice a day",
            "once a week"
        ],
        correctAnswer: "once a week"
    },
    {
        question: "How fast can dragonflies fly?",
        answers: [
            "7 mph",
            "12.5 mph",
            "35 mph",
            "2.5 mph"
        ],
        correctAnswer: "35 mph"
    },
];
startBtn.addEventListener("click", startQuiz);
resultsBox.addEventListener("submit", saveScore)
save.addEventListener('click', saveScore);
if (scoresArray === null) {
    scoresArray = [];
}else {
    scoresArray = JSON.parse(scoresArray)
    }


// start function
function startQuiz() {
    startBtn.style.display = "none";
    title.classList.add("hide")

    stopTime = setInterval(function () {
        if (currentTime <= 0) {
            endQuiz();
    } else {
        currentTime--;
    timerEl.textContent = currentTime;
}
    }, 1000);

// calls generateElements to display the FIRST question
generateElements(0);
}
// renders the Question text and Answers
function generateElements(questionIndex) {
    if (questionIndex === questionArray.length) {
        endQuiz()
    } else {
        let questionEl = document.createElement("h2");

        // change the text of the created H2 to the value of "question" of the question object
        questionEl.textContent = questionArray[questionIndex].question;
        quizBox.append(questionEl);
        let answerWrap = document.createElement('div');
        answerWrap.classList.add('answerWrapper');

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
            answerWrap.append(answerEl);


        })
        quizBox.append(answerWrap);
    }
};

// displays the NEXT question of whatever was clicked on
function nextQuestion(event) {
    // the local questionIndex will be the same as the generateElements questionIndex
    let questionIndex = parseInt(event.target.getAttribute("question-index"), 10);
    let answer = event.target.getAttribute("answer");
    let question = questionArray[questionIndex];
    quizBox.textContent = '';
    generateElements(++questionIndex);
    // if clicked answer matches answer it displays correct
    if (question.correctAnswer === answer) {
        let correctEl = document.createElement("h4");
        correctEl.textContent = "Correct!";
        userScore++
        quizBox.append(correctEl);
        function hideElement() {
            correctEl.remove();
        }
        setTimeout(hideElement, 1000);
    // or clicked answer doesn't match answer it displays wrong
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
}

function saveScore(event) {
    event.preventDefault();
    let initials = document.querySelector('#results input').value;
    localStorage.setItem('initials' , initials);
    localStorage.setItem('score', userScore);
    let userInitials = localStorage.getItem('initials');
    let finalScore = localStorage.getItem('score');
    scoresArray.push({
        initials,
        score:userScore,
    });
    localStorage.setItem('highscores', JSON.stringify(scoresArray))
    window.location.href = "https://scottgeleas.github.io/AnimalQuiz/highScore.html";
}

function endQuiz() {
    clearInterval(stopTime);
    quizBox.classList.add('hide');
    resultsBox.classList.remove('hide');
}
