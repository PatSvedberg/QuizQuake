let continueBtn = document.getElementById("continue"); //continue button in tutorial window div
let options = document.getElementsByClassName("option"); // Answer buttons
let tutWindow = document.getElementById("tutorial"); // Tutorial Window
let gameWindow = document.getElementById("game-container"); // Game-container window
let header = document.querySelector('header'); // Header bar
let footer = document.getElementById("footer") // Footer
let nextBtn = document.getElementById("next-btn-div"); // Next question button
let playAgainBtn = document.getElementById("playAgain"); // Play Again button
let endGame = document.getElementById("endDiv"); // End game screen
let endScore = document.getElementById("endScore") // Your end score
let question_count = 0; // What question is shown
let correct = false; // Is the correct answer selected?
let points = 0; // Points for the scoreboard
let score = document.getElementById("score") // Score text inside the header
let catMain = document.getElementById("categories"); //Category window
let cat1 = document.getElementById("category1"); //Category 90's music
let cat2 = document.getElementById("category2"); // Category Space
score.innerText = `${points}`;
let questArray = 0; // Picks catergory questions array

/**
* 90's music question and answer array
*/
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

/**
* Space question and answer array
*/
let questions2 = [{
        id: 1,
        question: "Which planet in our solar system is closest to the Sun?",
        answer: "Mercury",
        option: [
            "Venus",
            "Mars",
            "Mercury",
            "Jupiter"
        ]
    },
    {
        id: 2,
        question: "What is the name of the largest moon in our solar system?",
        answer: "Ganymede",
        option: [
            "Titan",
            "Callisto",
            "Ganymede",
            "Europa"
        ]
    },
    {
        id: 3,
        question: "What is the name of the brightest star in the sky?",
        answer: "Sirius",
        option: [
            "Vega",
            "Sirius",
            "Polaris",
            "Betelgeuse"
        ]
    },
    {
        id: 4,
        question: "Which planet in our solar system has the largest number of moons?",
        answer: "Jupiter",
        option: [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Uranus"
        ]
    },
    {
        id: 5,
        question: "What is the term used to describe the point in space where the gravitational pull is so strong that nothing can escape it?",
        answer: "Black hole",
        option: [
            "Asteroid",
            "Nebula",
            "Supernova",
            "Black hole"
        ]
    },
];

/**
* Loads question and answers
*/
window.onload = function () {
    showQuestion(question_count);
    showOptions(question_count);
};

/**
* Tutorial continue button
*/
continueBtn.addEventListener("click", function () {
    tutWindow.style.display = "none"; //Closes the tutorial window
    catMain.style.display = "flex"; // Opens the category window
});

/**
* Pick 90's music button
*/
cat1.addEventListener("click", function () {
    catMain.style.display = "none"; // Close category window
    gameWindow.style.display = "flex"; // Opens the game
    header.style.display = "flex"; // Opens the header
    footer.style.display = "none";
    questArray = 0;
    showQuestion(questArray);
    showOptions(questArray);
    question_count = 0;
    showQuestion(question_count);
    showOptions(question_count);

});

/**
* Pick space category button
*/
cat2.addEventListener("click", function () {
    catMain.style.display = "none"; // Close category window
    gameWindow.style.display = "flex"; // Opens the game
    header.style.display = "flex"; // Opens the header
    footer.style.display = "none";
    questArray = 1;
    showQuestion(questArray);
    showOptions(questArray);
    question_count = 0;
    showQuestion(question_count);
    showOptions(question_count);
});

/**
* Play again button
*/
playAgainBtn.addEventListener("click", function () {
    endGame.style.display = "none"; //Closes the End game window
    tutWindow.style.display = "flex"; //Closes the tutorial window
    question_count = 0; //Reset questions
    showQuestion(question_count);
    showOptions(question_count);
    points = 0; // Reset Scoreboard
    score.innerText = `${points}`;
    nextBtn.style.display = "none";
    footer.style.display = "flex";
});

/**
* Adds the question text from the questions array to the question text area
*/
function showQuestion(count) {
    let question = document.getElementById("question-text");
    if (questArray === 0) {
        question.innerText = `${questions[count].question}`
    }
    if (questArray === 1) {
        question.innerText = `${questions2[count].question}`
    }

}

/**
* Adds the options text from the questions array to the answers buttons
*/
function showOptions(count) {

    let option1 = document.getElementById("answer1");
    let option2 = document.getElementById("answer2");
    let option3 = document.getElementById("answer3");
    let option4 = document.getElementById("answer4");

    if (questArray === 0) {
        let [first, second, third, fourth] = questions[count].option;
        option1.innerText = `${first}`;
        option2.innerText = `${second}`;
        option3.innerText = `${third}`;
        option4.innerText = `${fourth}`;
    }
    if (questArray === 1) {
        let [first, second, third, fourth] = questions2[count].option;
        option1.innerText = `${first}`;
        option2.innerText = `${second}`;
        option3.innerText = `${third}`;
        option4.innerText = `${fourth}`;
    }
}

/**
* Toogle correct or incorrect selected option
*/
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (event) {
        nextBtn.style.display = "flex";
        let clickedOption = event.target.innerText;
        let correctAnswer = questions[question_count].answer;
        let correctAnswer2 = questions2[question_count].answer;
        if (clickedOption === correctAnswer || clickedOption === correctAnswer2) {
            correct = true; // set "correct" variable to true if answer is correct
        }
        if (clickedOption !== correctAnswer && clickedOption !== correctAnswer2) {
            correct = false; // set "false" variable to true if answer is incorrect
        }
    });
}

/**
* Updates points
*/
function givePoint() {
    points++;
    score.innerText = `${points}`;
}

/**
* Next question button function
*/
function nextQ() {
    if (question_count == questions.length - 1 && correct === false) {
        gameWindow.style.display = "none";
        endGame.style.display = "flex";
        header.style.display = "none";
        endScore.innerText = `${points} of 5`;
        alert("Incorrect! - No point added");
    }
    if (question_count == questions.length - 1 && correct === true) {
        givePoint();
        gameWindow.style.display = "none";
        endGame.style.display = "flex";
        header.style.display = "none";
        endScore.innerText = `${points} of 5`;
        alert("Correct! - Point added");
    }

    if (correct) { // check if "correct" variable is true
        givePoint(); //if so give point
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false
        nextBtn.style.display = "none";
        alert("Correct! - Point added");
    } else {
        question_count++; //Next question
        showQuestion(question_count);
        showOptions(question_count);
        correct = false; // reset "correct" variable to false
        nextBtn.style.display = "none";
        alert("Incorrect! - No point added");
    }
}

/**
* If the next button is visible you can press "5" to click it
*/
document.addEventListener('keydown', function (e) {
    if (e.code === 'Digit5' && nextBtn.style.display === "flex") {
        nextQ();
    }
});