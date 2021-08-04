# Javascript-Quiz
Homework Assignment #4 UCD Bootcamp

# test-your-knowledge-javascript

Test your Knowledge- Javascript is a quiz module that allows users to take a timed quiz of randomly generated questions.

## Table of Contents
General Info
Technologies Used 
Features
Screenshots
Setup
Usage
Project Status
Room for Improvement
Acknowledgements
Contact
## Prerequisites

Before you continue, ensure that you have met the following requirements:
* You are using a Linux, Mac or Windows machine.
* You have a basic understanding of javascript.


## General Information
This module creates a dynamic online quiz that allows users to answer 8 randomly generated questions in a span of 90 seconds. This module was created as a simple step-by-step quiz format that allows for easy manipulation and customization.


## Technologies Used
Visual Studio Code
jQuery v3.6.0

## Features

* features a countdown timer.
* appears one question at a time, requiring that the question be answered before moving forward.
* automatically indicates correct and incorrect answers using color coding upon click of "next" button.
* tracks user scores are automatically.
* evaluates answer data to determine a grade % based on number of correct answers.


## Setup
Fork the repo here: https://github.com/Nmounce/test-your-knowledge-javascript.git

## Usage
This module can be used as a template for any type of standard, multiple choice quiz. To customize, simply edit the questions and answers in the javascript page function "let questions =". The quiz is set up for a timer count of 90 seconds. Time value can be altered in the js file "var seconds" here:
            //function for timer (id="timer-counter")
            var goToResultBox = document.querySelector("#result-box");
            var timer = document.getElementById("time-left");
            -> var seconds = 5; <-
Additionally the question count is 8 by default. Additional questions can be added in the js file in the "let questions =" function. If you would like to increase the number of questions displayed in each quiz (can differ from you total question count, ie. you can have 50 questions and choose to have the program select 15 per quiz at random- helps to ensure that users are receiving a different quiz on each load.), alter the index number in the js file "while.shuffledQuestions.length <=#) here:
            //function to shuffle questions
            let shuffledQuestions = [];
            function handleQuestions() {
              ->  while (shuffledQuestions.length <=7) <-
If the question count is altered, you must also change the HTML display indication the question count and number correct, here:
<section id="quiz">
            <section id="time-score-container">
            ->    <h3>Score : <span class="count" id="player-score"></span> / 8</h3> <-
             ->   <h3>Question : <span class="count" id="question-number"></span> / 8</h3>  <-
             and here: 
            <section class="all-box" id="result-box" style="display: none">
                 <h2>Congrats! You've completed the Quiz!</h2>
                    <div id="results">
                    ->    <p>Number Correct : <span class="result-text" id="result-score"></span> / 8</p> <-

## Project Status
Project is: in progress.

## Room for Improvement

Improvement to be done 1: Fix timer function to display time-left-result when timer runs out. 
Improvement to be done 2: re-set count and timer on re-try.
Improvement to be done 3: List all questions with user answers and correct answers with indications of correct/incorrect on results page. 

## Acknowledgements
Shout out to the TA's for the UC Davis Bootcamp for Software Development. Without them, this might still be a blank page...

## Contact
Nikki Mounce 
github: https://github.com/Nmounce
email: nikkimounce@gmail.com
Created by @dominikki - feel free to contact me!
