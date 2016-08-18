$(document).ready(function(){
    var answerClicked = 100;

    quiz.reset();
    console.log(answerClicked);

    $('#start').on("click", function(){

        quiz.start(); //timer is on, 30 seconds for each questions
        console.log(counter);
        console.log(quiz.numberOfQuestions);
        //next question in 2 seconds
        quiz.displayQuestion();
    })

    $('.option').on("click", function(){
        answerClicked = this.id;        
    })

    //if correctAnswer and time is not up
    if (answerClicked === quiz.quizList[quiz.numOfQuestions].choices[quiz.correctAnswer]) {
        quiz.displayAnswer();
        quiz.correct++;
        $('#answer').html(' Correct! '+ quiz.quizList[quiz.numOfQuestions].choices[quiz.correctAnswer] + ' ');
    }
    //time is up
    else  if (quiz.time === 30) {
        quiz.displayAnswer();
        $('#answer').html(' Your time is up! Correct answer: '+ quiz.quizList[quiz.numOfQuestions].choices[quiz.correctAnswer] + ' ');
        quiz.timesUp++;
    }
    else {
        quiz.displayAnswer();
        //if answer is not correct
        $('#answer').html(' The correct answer: '+ quiz.quizList[quiz.numOfQuestions].choices[quiz.correctAnswer] + ' ');
        quiz.incorrect++;
    }

    console.log(quiz.quizList[quiz.numOfQuestions].choices[quiz.correctAnswer]);

    if (quiz.numOfQuestions === quiz.quizList.length) {
        quiz.quizOver();
    }

});

var counter = 0;
var quiz = {
    quizList: [{
                question: "What is the population of Brazil?",
                choices: ["145 million", "199 million", "182 million",  "205 million"],
                correctAnswer: 1 },
            {
                question: "What is 27*14?",
                choices: ["485", "634", "408", "528"],
                correctAnswer: 2 },
            {
                question: "What is the busiest train station in the world?",
                choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
                correctAnswer: 1 },
            {
                question: "What is the longest river?",
                choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
                correctAnswer: 0 }, 
            {
                question: "What is the busiest tube station in the London?",
                choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
                correctAnswer: 0 }
        ],  
    time: 5,
    numOfQuestions: 0,
    correct: 0,
    incorrect: 0,
    timesUp: 0,
    reset: function() {
        quiz.time = 5;
        quiz.numOfQuestions = 0;  
        quiz.correct = 0;
        quiz.incorrect = 0;
        quiz.timesUp = 0;
        $('#timer'). hide();
        $('#question').hide();
        $('#answer').hide();
        $('#choices').hide();
        $('#game-over-contaner').hide();
        $('#game-over').hide();        
    },
    start: function() {
        counter = setInterval(quiz.countDown, 1000); // here timer should be counting    
    },
    stop: function() {
        clearInterval(counter);
    },
    recordNumber: function() {
        quiz.numOfQuestions++;
    },
    countDown: function() {
        
        $('#timer').show().html('Time remaining: ' + quiz.time + ' sec.');
        quiz.time--;
        console.log(quiz.time);
    },
    displayQuestion: function(){
        console.log(quiz.time);
        $('#start').hide();
        
        $('#question').show();
        $('#choices').show();

        $('#question').html(''+ quiz.quizList[quiz.numOfQuestions].question + ' ');
        $('#choices').empty();
        
        for (var i = 0; i < quiz.quizList[quiz.numOfQuestions].choices.length; i++ ) {

            $('#choices').append('<li id="' + i + '" class="list-group-item list-group-item-info">' + quiz.quizList[quiz.numOfQuestions].choices[i] + '</li>');
        
            console.log(quiz.quizList[quiz.numOfQuestions].choices[i]);
        }
    },
    displayAnswer: function(){
        quiz.recordNumber(); //count questions/answers
        quiz.stop(); //reset time
        $('#question-contaner').hide();
    },
    quizOver: function() {
        $('#game-over-contaner').show();
        $('#correct-answers').html('Correct answers: ' + quiz.correct);
        $('#incorrect-answers').html('Correct answers: ' + quiz.incorrect);
        $('#unanswered').html('Correct answers: ' + quiz.timesup);        
    }
};

