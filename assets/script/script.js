///code source: https://www.codingnepalweb.com/quiz-app-with-timer-javascript/

const start_btn = document.querySelector('.start-btn button');
const info_box = document.querySelector('.info-box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .continue');
const quiz_box = document.querySelector('.quiz-box');
const result_box = document.querySelector('.result-box');
const option_list = document.querySelector('.option-list');
const time_line = document.querySelector('.header .time-line');
const timeText = document.querySelector('.timer .time-left-text');
const timeCount = document.querySelector('.timer .timer-sec');

// if start quiz button is clicked
start_btn.onclick = () => {
    info_box.classList.add('activeInfo'); //show info box
}
// if exit button is clicked 
exit_btn.onclick = () => {
    info_box.classList.remove('activeInfo'); //hide info box
}
//if continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove('activeInfo'); //hide info box
    quiz_box.classList.add('activeQuiz'); //show quiz box
    showQuestions(0); //calling showQuestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(90); //calling startTimer function
    startTimerLine(0); //calling startTimerline function
}

let timeValue = 90;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector('.buttons .restart');
const quit_quiz = result_box.querySelector('.button .quit');

//if restart button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add('activeQuiz'); //show quiz box
    result_box.classList.remove('activeResult'); //hide result box
    timeValue = 90;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); //calling showQuestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); // clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to timeleft
    next_btn.classList.remove('show'); //hide the next button
}
//if quit button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the window
}

const next_btn = document.querySelector('footer .next-btn');
const bottom_ques_counter = document.querySelector('footer .total-que');

//if next que button clicked 
next_btn.onclick = () => {
    if (que_count < questions.length -1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQuestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to time left
        next_btn.classList.remove('show'); //hides the next button
    }else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

//get q&a from array
function showQuestions(index) {
    const que_text = document.querySelector('.que-text');
    //create a new span and div tag for q&a and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>';
    let option_tag = '<div class="options"><span>'+ questions[index].options[0] +'<span></div>'
    + '<div class="options"><span>'+ questions[index].options[1] +'<span></div>'
    + '<div class="options"><span>'+ questions[index].options[2] +'<span></div>'
    + '<div class="options"><span>'+ questions[index].options[3] +'<span></div>';
    que_text.innerHTML = que_tag; //adding a new span inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll('.option');

    //set onclick attribute to all available options
    for(i=0; i < option.length; i++) {
        option[i].setAttribute('onClick', 'optionSelected(this)');
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"</i></div>';
let crossIconTag = 'div class="icon cross"><i class="fas fa-times></i></div>';

//if user clicked an option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer for that question
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns) { //if user selected option is equal to an arrays correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //add green color to correct selection
        answer.insertAdjacentHTML('beforeend', tickIconTag); //adding tick
        console.log("Correct Answer");
        console.log("your correct answers = " + userScore);
    }else {
        answer.classList.add("incorrect"); //adding red color to incorrect selection
        answer.insertAdjacentHTML('beforeend', crossIconTag); //adding cross icon
        console.log("Wrong Answer");

        for (i=0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to match
                option_list.children[i].insertAdjacentHTML('beforeend', tickIconTag); //adding tick icon to match
                console.log("Auto selected correct answer");
            }
        }
    }
    for(i=0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user selects an option then disable all options
    }
    next_btn.classList.add("show"); //show the next button if user selects any option
}

function showResult() {
    info_box.classList.remove('activeInfo'); //hide info box
    quiz_box.classList.remove('activeQuiz'); //hide quiz box
    result_box.classList.add('activeResult'); //show result box
    const scoreText = result_box.querySelector('.score-text');
    if (userScore > 3) { //if user score is greater than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore + '</p> out of <p>' questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; //adding a new span tag inside scoreText
    }
    else if(userScore > 1) { //if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ //if user scored less than 1
        let scoreTag = '<span>and sorry, You got only <p>'+ userScore + '</p> out of <p>'+ questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement this time value
        if(time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero; //add a zero before time value
    }
    if(time < 0) { //if timer is less than 0
        clearInterval(counter); //clear counter
        timeText.textContent = "Time's Up!"; //change the time text to times up
        const allOptions = option_list.children.length; //getting all option items 
        let correcAns = questions[que_count].answer; //getting correct answers from array
        for(i=0; i < allOptions, i++) {
            if(option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute('class', 'option correct'); //adding green color
                option_list.children[i]insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon
                console.log("Time Off: Auto Selected correct answer.")
            }
        }
        for (i=0; i < allOptions; i++) {
            option_list.children[i].classList.add('disabled'); //once user selects an option then disable all options
        }
            next_btn.classList.add('show'); //show the next button if user selected any option
        }
    }
}
function startTimerLine(time) {
    counterLine = setInterval(timer, 90);
    function timer () {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) {
            clearInterval(counterLine); //clear counterline
        }
    }
}
function queCounter(index){
    //creating a new span tag and passing the question number and total question 
    let totalQueCountTag = '<span><p>'+ index +'</p> of <p>' + questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCountTag; //adding a new span tag inside bottom_que_counter
}