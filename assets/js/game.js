$(document).ready(function(){

     //Creat questions/answers list 
    var quizList = [{
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
    ];

    var count = 0;

       // console.log(quizList);
        //hide titles, questios/answers, etc, only start button visiable
        $('#time-remaining'). hide();
        $('#question').hide();
        $('#answer').hide();
        $('#choices').hide();
        $('#game-over-contaner').hide();
        $('#game-over').hide();

    function displayQuestion (){
        $('#start').hide();
        $('#question').show();
        $('#choices').show();

        $('#question').html(''+ quizList[count].question + ' ');
        $('#choices').empty();
        
        for (var i = 0; i < quizList[count].choices.length; i++ ) {

            $('#choices').append('<li id="' + i + '" class="list-group-item list-group-item-info">' + quizList[count].choices[i] + '</li>');
        
            //console.log(quizList[count].choices[i]);
        }

        //next question in 30 seconds
        setInterval(nextQuestion, 2000);

    }

    function nextQuestion (){
      count++;

      setTimeout(displayQuestion, 5000);

      if (count==quizList.length){
          count = 0;
          quizDone();
          console.log('DONE!');
      }
    }
 

    function quizDone () {
      clearInterval(setInterval(nextQuestion, 0));
    }

    $('#start').on("click", function(){
        displayQuestion();

    })

});

