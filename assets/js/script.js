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

let question_count = 0;
let points = 0;

window.onload = function () {
    showQuestion(question_count);
    showOptions(question_count);
};

function showQuestion(count) {
    let question = document.getElementById("question-text");

    question.innerText = `${questions[count].question}`
}

function showOptions(count) {
    let options = document.getElementById("option_group");
    let [first, second, third, fourth] = questions[count].option;

    options.innerHTML = `<div id="answers-area">
    <div class="answer-div">
        <p>1</p>
        <p class = "answer-text">${first}</p>
    </div>
    <div class="answer-div">
        <p>2</p>
        <p class = "answer-text">${second}</p>
    </div>
    <div class="answer-div">
        <p>3</p>
        <p class = "answer-text">${third}</p>
    </div>
    <div class="answer-div">
        <p>4</p>
        <p class = "answer-text">${fourth}</p>
    </div>
    <button id="submit-button" data-type="submit">Submit</button>
</div>`
}