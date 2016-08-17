$(document).ready(function(){

    $('#start').on("click", function(){
        //next question in 2 seconds
        
        displayQuestion();
    })

    $('.option').on("click", function(){
        answerClicked = this.id;        
    })

});

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
    time: 30,
    numOfQuestions: 1,
    correct: 0,
    incorrect: 0,
    timesUp: 0,
    reset: function() {
        quiz.time = 0;
        quiz.numOfQuestions = 1;  
        correct = 0;
        incorrect = 0;
        timesUp = 0;
        $('#timer'). hide();
        $('#question').hide();
        $('#answer').hide();
        $('#choices').hide();
        $('#game-over-contaner').hide();
        $('#game-over').hide();        
    }
    start: function() {
        counter = setInterval(countDown, 1000); // here timer should be counting    
    }
    stop: function() {
        clearInterval(counter);
    }
    recordNumber: function() {
        quiz.numOfQuestions++;
    }
    countDown: function() {
        quiz.time--;
    }
    displayQuestion: function(){
        start(); //timer is on, 30 seconds for each questions
        $('#start').hide();
        $('#timer').html('Time remaining: 'quiz.time + ' sec.');
        $('#question').show();
        $('#choices').show();

        $('#question').html(''+ quizList[quiz.numOfQuestions].question + ' ');
        $('#choices').empty();
        
        for (var i = 0; i < quizList[quiz.numOfQuestions].choices.length; i++ ) {

            $('#choices').append('<li id="' + i + '" class="list-group-item list-group-item-info">' + quizList[quiz.numOfQuestions].choices[i] + '</li>');
        
            console.log(quizList[quiz.numOfQuestions].choices[i]);
        }
    }
    displayAnswer: function(){
        recordNumber(); //count questions/answers
        stop(); //reset time
        $('#question-contaner').hide();
        //if correctAnswer and time is not up
        if (answerClicked === quiz.quizList[quiz.numOfQuestions].choices[correctAnswer]) {
            quiz.correct++;
            $('#answer').html(' Correct! '+ quiz.quizList[quiz.numOfQuestions].choices[correctAnswer] + ' ');
        }
        //time is up
        else  if (quiz.time === 30) {
            $('#answer').html(' Your time is up! Correct answer: '+ quiz.quizList[quiz.numOfQuestions].choices[correctAnswer] + ' ');
            quiz.timesUp++;
        }
        else {
            //if answer is not correct
            $('#answer').html(' The correct answer: '+ quiz.quizList[quiz.numOfQuestions].choices[correctAnswer] + ' ');
            quiz.incorrect++;
        }
        console.log(quiz.quizList[quiz.numOfQuestions].choices[correctAnswer]);

        if (quiz.numOfQuestions === quiz.quizList.length) {
            quizOver();
        }
        displayQuestion();

    }
    quizOver: function() {
        $('#game-over-contaner').show();
        $('#correct-answers').html('Correct answers: ' + quiz.correct);
        $('#incorrect-answers').html('Correct answers: ' + quiz.incorrect);
        $('#unanswered').html('Correct answers: ' + quiz.timesup);        
    }
};

