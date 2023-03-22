let question_count = 0;
let correct = false;
let points = 0;
let score = document.getElementById("score")
score.innerText = `${points}`
let questions = [{
        id: 1,
        question: "Who had a hit with 'Smells Like Teen Spirit' in 1991?",
        answer: "Nirvana",
        option: [
            "Oasis",
            "Pearl Jam",
            "Nirvana",
            "Soundgarden"
        ]
    },
    {
        id: 2,
        question: "Which boy band released 'I Want It That Way' in 1999?",
        answer: "Backstreet Boys",
        option: [
            "Backstreet Boys",
            "NSYNC",
            "98 Degrees",
            "Boyz II Men"
        ]
    },
    {
        id: 3,
        question: "Which female artist sang 'Genie in a Bottle' in 1999?",
        answer: "Christina Aguilera",
        option: [
            "Britney Spears",
            "Christina Aguilera",
            "Jennifer Lopez",
            "Destiny's Child"
        ]
    },
    {
        id: 4,
        question: "Which rap artist released 'California Love' in 1995?",
        answer: "2Pac",
        option: [
            "2Pac",
            "Notorious B.I.G.",
            "Snoop Dogg",
            "Ice Cube"
        ]
    },
    {
        id: 5,
        question: "Who sang 'Wonderwall' in 1995?",
        answer: "Oasis",
        option: [
            "Oasis",
            "Blur",
            "Radiohead",
            "The Verve"
        ]
    },
];

window.onload = function () {
    showQuestion(question_count);
    showOptions(question_count);
};



// Adds the question text from the questions array to the question text area
function showQuestion(count) {
    let question = document.getElementById("question-text");

    question.innerText = `${questions[count].question}`
}

// Adds the options text from the questions array to the answers buttons
function showOptions(count) {
    let option1 = document.getElementById("answer1");
    let option2 = document.getElementById("answer2");
    let option3 = document.getElementById("answer3");
    let option4 = document.getElementById("answer4");
    let [first, second, third, fourth] = questions[count].option;

    option1.innerText = `${first}`;
    option2.innerText = `${second}`;
    option3.innerText = `${third}`;
    option4.innerText = `${fourth}`;
}


let options = document.getElementsByClassName("option");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (event) {
        let clickedOption = event.target.innerText;
        let correctAnswer = questions[question_count].answer;
        if (clickedOption === correctAnswer) {
            alert("Correct!");
            correct = true; // set "correct" variable to true if answer is correct
        }
        if (clickedOption !== correctAnswer) {
            alert("false!");
            correct = false; // set "false" variable to true if answer is incorrect
        }
    });
}

function givePoint() { //Updates points
    points++;
    console.log("Points given");
    score.innerText = `${points}`;
}

function nextQ() {
    if (question_count == questions.length - 1) {
        alert("End of game. Your score is: " + points);
        console.log(question_count);
    }
    if (correct) { // check if "correct" variable is true
        givePoint(); //if so give point
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false

    }
    else {
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false
    }
}