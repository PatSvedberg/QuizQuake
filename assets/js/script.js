const question = document.getElementById("question-text"); //Get question text
const answers = Array.from(document.querySelectorAll(".answer-text")); //Get all answer texts
const scoreNumber = document.getElementById("score"); //Get score number

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let question = [
    {
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



