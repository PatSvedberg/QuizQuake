let continueBtn = document.getElementById("continue"); //continue button in tutorial window div
let options = document.getElementsByClassName("option"); // Answer buttons
let tutWindow = document.getElementById("tutorial"); // Tutorial Window
let gameWindow = document.getElementById("game-container"); // Game-container window
let header = document.querySelector('header'); // Header bar
let nextBtn = document.getElementById("next-btn-div"); // Next question button
let playAgainBtn = document.getElementById("playAgain"); // Play Again button
let endGame = document.getElementById("endDiv"); // End game screen
let endScore = document.getElementById("endScore") // Your end score
let question_count = 0; // What question is shown
let correct = false; // Is the correct answer selected?
let points = 0; // Points for the scoreboard
let score = document.getElementById("score") // Score text inside the header
score.innerText = `${points}`
// Question and answer array
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

// Loads question and answers
window.onload = function () {
    showQuestion(question_count);
    showOptions(question_count);
};

// Tutorial continue button
continueBtn.addEventListener("click", function () {
    tutWindow.style.display = "none"; //Closes the tutorial window
    gameWindow.style.display = "flex"; // Opens the game
    header.style.display = "flex"; // Opens the header
});

playAgainBtn.addEventListener("click", function () {
    endGame.style.display = "none"; //Closes the End game window
    tutWindow.style.display = "flex"; //Closes the tutorial window
    question_count = 0; //Reset questions
    showQuestion(question_count);
    showOptions(question_count);
    points = 0; // Reset Scoreboard
    score.innerText = `${points}`;
    nextBtn.style.display = "none";
});



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

// Toogle correct or incorrect selected option
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (event) {
        nextBtn.style.display = "flex";
        let clickedOption = event.target.innerText;
        let correctAnswer = questions[question_count].answer;
        if (clickedOption === correctAnswer) {
            correct = true; // set "correct" variable to true if answer is correct
        }
        if (clickedOption !== correctAnswer) {
            correct = false; // set "false" variable to true if answer is incorrect
        }
    });
}

 //Updates points
function givePoint() {
    points++;
    score.innerText = `${points}`;
}

//Next question button function
function nextQ() {
    if (question_count == questions.length - 1) {
        gameWindow.style.display = "none";
        endGame.style.display = "flex";
        header.style.display = "none";
        endScore.innerText = `${points}`;
    }
    if (question_count == questions.length - 1 && correct === true) {
        givePoint();
        gameWindow.style.display = "none";
        endGame.style.display = "flex";
        header.style.display = "none";
        endScore.innerText = `${points}`;
    }

    if (correct) { // check if "correct" variable is true
        givePoint(); //if so give point
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false
        nextBtn.style.display = "none";

    } else {
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false
        nextBtn.style.display = "none";
    }
}

//If the next button is visible you can press "5" to click it
document.addEventListener('keydown', function (e) {
    if (e.code === 'Digit5' && nextBtn.style.display === "flex") {
        nextQ();
    }
});


  