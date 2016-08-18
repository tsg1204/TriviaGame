


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

    if (quiz.index === quiz.quizList.length) {
        quiz.quizOver();
    }


        //time is up
    if (quiz.time === 5) {
        quiz.stop(); //reset timer
        $('#question-contaner').hide();
        $('#answer').html(' Your time is up! Correct answer: '+ quiz.quizList[quiz.index].choices[quiz.correctAnswer] + ' ');
        quiz.timesUp++;

    }

    console.log('index from main: ' + quiz.index);


    $(document).ready(function(){
    var answerClicked = 9;

    quiz.reset();
    console.log('answerClicked init: ' + answerClicked);

    $('#start').on("click", function(){

        quiz.startTimer(); //timer is on, 30 seconds for each questions
        //console.log('counter init: ' + counter);
        //console.log('index init: ' + quiz.index);
        //next question in 2 seconds
        quiz.displayQuestion();
    })

    setTimeout(quiz.nextQuestion, 5000);


});

var counter = 0;
var quiz = {
    quizList: [{
                question: "First question?",
                choices: ["485", "634", "408", "528"],
                correctAnswer: 2 },
            {
                question: "Second question?",
                choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
                correctAnswer: 1 },
            {
                question: "Third question?",
                choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
                correctAnswer: 0 }, 
            {
                question: "Fouth question?",
                choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
                correctAnswer: 0 }
        ],  
    time: 5,
    index: 0,
    correct: 0,
    incorrect: 0,
    timesUp: 0,
    reset: function() {
        quiz.time = 5;
        quiz.index = 0;  
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
    displayQuestion: function(){
        console.log('time from display: ' + quiz.time);
        $('#start').hide();
        
        $('#question').show();
        $('#choices').show();

        $('#question').html(''+ quiz.quizList[quiz.index].question + ' ');
        $('#choices').empty();
        
        for (var i = 0; i < quiz.quizList[quiz.index].choices.length; i++ ) {

            $('#choices').append('<li id="' + i + '" class="list-group-item list-group-item-info">' + quiz.quizList[quiz.index].choices[i] + '</li>');
        
            console.log(quiz.quizList[quiz.index].choices[i]);
        }
       // quiz.index++;
    },
    nextQuestion() {
        quiz.index++;
        //console.log('index from display: ' + quiz.index);

        setTimeout(quiz.displayQuestion, 5000);

        if (index == quiz.quizList[quiz.index].choices.length) {
            index = 0;
        }
    },

    quizOver: function() {
        $('#game-over-contaner').show();
        $('#correct-answers').html('Correct answers: ' + quiz.correct);
        $('#incorrect-answers').html('Correct answers: ' + quiz.incorrect);
        $('#unanswered').html('Correct answers: ' + quiz.timesup);        
    }
};
