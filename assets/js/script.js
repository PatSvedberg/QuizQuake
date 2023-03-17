const question = document.getElementById("question-text"); //Get question text
const answers = Array.from(document.querySelectorAll(".answer-text")); //Get all answer texts
const scoreNumber = document.getElementById("score"); //Get score number

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

//Questions array
let questions = [{
        question: "What is life?",
        answer1: "Hell",
        answer2: "Who knows",
        answer3: "Heaven",
        answer4: "42",
        answer: 1,
    },
    {
        question: "What is death?",
        answer1: "Hell",
        answer2: "Who knows",
        answer3: "Heaven",
        answer4: "42",
        answer: 4,
    }
]

const SCORE_POINTS = 1; //Score per question
const MAX_QUESTIONS = 4; //Questions per game

runGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('moreRecentScore', score);

        return window.location.assign('/end.html');
    }
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach(answer => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
    })
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true;
}

answers.forEach(answer => {
            answer.addEventListener('click', e => {
                    if (!acceptingAnswers) return;

                    acceptingAnswers = false;
                    const selectedAnswer = e.target;
                    const selectedCorrectAnswer = selectedAnswer.dataset['number'];

                    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect';

                    if (classToApply === 'correct') {
                        incrementScore(SCORE_POINTS)
                    }

                    selectedAnswer.parentElement.classList.add(classToApply)

                    setTimeout(() => {
                            selectedAnswer.parentElement.classList.remove(classToApply)
                            getNewQuestion()
                        }, 1000)
                    })
            })

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

runGame();