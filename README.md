# Quiz Quake - Portfolio Project 2. By Patric Svedberg

![Image of project on different screens](/assets/images/QQ_Screens.PNG "Image of project on different screens")<br>
Imaged made using [https://ui.dev/amiresponsive](https://ui.dev/amiresponsive)

## Table of Content:

* [Pages](#pages)
    * [Index](#index)
* [User Experience](#UX)
    * [User Demographics](#Demographics)
    * [Design](#Design)
    * [Controls](#controls)
* [Design](#Design)
    * [Color Scheme](#Color)
    * [Typography](#Typography)
    * [Wireframe](#Wireframe)
* [Technologies Used](#Technologies-Used)
    * [Software Used](#software-used)
    * [Languages Used](#Languages-used)
* [Testing](#Testing)
    * [Lighthouse](#Lighthouse)
    * [Validators](#Validators)
* [Features](#Features)
     * [Header and Navigation](#Header-and-Navigation)
     * [Index](#Index)
     * [Features Left to Implement](#Features-Left-to-Implement)
* [Content](#Content)
    * [Content](#Inspirations)
    * [Media](#Media)
    * [Acknowledgments](#Acknowledgments)

    # Pages:
    ## Index:
    There is only one page, but 3 different divs and sections are activated and deactivated inside it.

    * The Tutorial div:
        * What the player i greeted with. It was a small explanation of the game and how to play it. At the buttom of the div there is a "continue" button that closes the div and opens the game-container.

    ![Image of tutorial page](/assets/images/QQ_Tutorial.PNG "Image of tutorial page")

    * The Game-container section:
        * In this quiz, the player is presented with four possible answers and is required to pick the correct one. After selecting an answer the next-button appears. After answering the last question the game-container closes and the end game div opens.

![Image of question page](/assets/images/QQ_Question.PNG "Image of question page")
                
![Image of question page with button](/assets/images/QQ_Question_btn.PNG "Image of question page with button")

* The End div
        * The end game screen. Here the final score is presented.
    ![Image of end page](/assets/images/QQ_End.PNG.PNG "Image of end page")


# UX
## Demographics:
* Anybody who likes to play quizes
# Design
I wanted to have everything on one page and the game should be intuitive.
# Controls
The controls is just point and click for both mobile and desktop/laptop.

## Color:
I wanted to have a darker theme to make it easier on the eye and also making it look a bit more modern in my opintion. The text is white and gold to make it easy to see on the dark background. The glowing turquoise borders is ment to give a neon feeling.
![Image of colors used](assets/images/Colors.png "Image of colors used")
Imaged made using [Coolers](https://coolors.co/)

## Typography:
This site uses the fonts: <br /> 
**[Anton - Regular 400](https://fonts.google.com/specimen/Anton?query=anton) <br />**
**[Prata - Regular 400](https://fonts.google.com/specimen/Prata?query=prata) <br />**

## Wireframe:
This is what i scetched up before I started coding.
![Image of wireframe](assets/images/quiz-wf.png "Image of wireframe")

# Technologies Used:

## Software Used
* Gitpod
* Github
 * Google Chrome Dev Tool

## Languages Used:
* HTML
* CSS
* JavaScript
<br />
<br />

# Testing:

* 2023-03-21: The question_count did not change the question when clicking the next question-button, even though the console.log showed that it incremented with +1 for every click on the button.
    I had forgot to return the new value to the funtion that displays the question and answers.

    ```function nextQ() {
        if (question_count == questions.length - 1) {
            alert("End of game");
            console.log(question_count);
        } else {
            question_count++;
            console.log("Another one!");
            showQuestion(question_count); // Forgot about this
            showOptions(question_count); // ...and this
        }
    };
    ```
* 2023-03-21: Manage to increment the score when going the next question, problem is that it always gives a score even if you've picked the wrong answer.
* 2023-03-22: Fixed the scoring. I made a boolean to trigger if the player clicked on the correct answer, and false if incorrect.<br<br>
## Old code:
![Image of old code](assets/images/oldcode.png "Image of old code")

## New code:
![Image of new code](assets/images/newCode.PNG "Image of new code")´

* 2023-03-23: Found bug where no points is given if answering the last question correct.


## Validators:
* ### HTML Validator:
![Image of HTML Validator](assets/images/QQ_HTML_Valid.PNG "Image of HTML Validator")

* ### CSS:
![Image of CSS Validator](assets/images/QQ_CSS_Valid.PNG "Image of CSS Validator")


## Lighthouse:
![Image of Lighthouse score](assets/images/QQ_Lighthouse.PNG "Image of Lighthouse score")
     
# Features

## Header
* The header has the game logo and the scoreboard .

## Index
* The index page is i collected everything. Tutorial, quiz and end screen.

## Features Left to Implement:
* More questions categories
* More questions for every catergory
* Using keyboard to pick questions
* Animations
* Submit score

<br />

# Content
## Media:
The social media icons were taken from [Font Awesome](https://fontawesome.com/)
    
## Inspirations and help:
* Got some help from this video by [PRAROZ](https://youtu.be/1ydfKDwsYbU)

# Acknowledgments:

## Thanks to:
### Lauren-Nicole Popich
* My mentor. For helpt end encouragement!
