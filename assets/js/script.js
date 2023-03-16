let question = document.getElementById("question-text");
let answer = Array.from(document.getElementsByClassName('answer-text'));

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let availableQuestion = [];

let questions = [
    {
        question: "What is the deepest point on Earth?";
        Answer1: "test1";
        Answer2: "test2";
    }
]

//question.innerHTML = "What is the deepest point on Earth?";
