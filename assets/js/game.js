$(document).ready(function(){

    quiz.reset();


    $('#start').on("click", function(){

      //  quiz.startTimer(); 
        quiz.displayQuestion(quiz.index);
        showQuestion = setInterval(quiz.nextQuestion, 5000);
    })

    $('.option').on("click", function(){
        answerClicked = this.id;      
        console.log(answerClicked);

        clearInterval(showQuestion);
    })
  

});


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

    displayQuestion: function(index){
       // console.log('time from display: ' + quiz.time);
        $('#start').hide();
        
        $('#question').show();
        $('#choices').show();

        $('#question').html(''+ quiz.quizList[index].question + ' ');
        $('#choices').empty();
        
        for (var i = 0; i < quiz.quizList[index].choices.length; i++ ) {

            $('#choices').append('<li id="' + i + '" class="list-group-item list-group-item-info option">' + quiz.quizList[index].choices[i] + '</li>');
        
            console.log(quiz.quizList[index].choices[i]);
        }
    },

    nextQuestion() {
        quiz.index++;
        console.log('index: ' + quiz.index);

        quiz.displayQuestion(quiz.index);

        if (quiz.index == (quiz.quizList[quiz.index].choices.length - 1)) {
            quiz.index = 0;
            clearInterval(showQuestion);
            quiz.quizOver();
        }

    },

    quizOver: function() {
        $('#answer-contaner').hide();
        $('#question-contaner').hide();        
        $('#game-over-contaner').show();
        $('#correct-answers').html('Correct answers: ' + quiz.correct);
        $('#incorrect-answers').html('Incorrect answers: ' + quiz.incorrect);
        $('#unanswered').html('Unanswered questions: ' + quiz.timesUp);        
    }
};

var timer = {
    start: function() {
        counter = setInterval(timer.countDown, 1000); // here timer should be counting    
    },
    stop: function() {
        clearInterval(counter);
    },
    countDown: function() {
        
        $('#timer').show().html('Time remaining: ' + quiz.time + ' sec.');
        quiz.time--;
    }    
}
