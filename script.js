var questions = [
    {
     question: "Is the Sky Blue?",
     answers: ["True", "False"],
     correctAnswer: "True",
    },
    
    {
     question: "Is the Sand Tan?",
     answers: ["True", "False"],
     correctAnswer: "True",
    },
    {
     question: "Is the Grass Green?",
     answers: ["True", "False"],
     correctAnswer: "True",
    },
    {
     question: "Is an Orange Orange?",
     answers: ["True", "False"],
     correctAnswer: "True",
    },
    {
     question: "A Peach has a Pit?",
     answers: ["True", "False"],
     correctAnswer: "True",
    },
   ];

   var questionIndex = 0;
   
   var time = 10;
   var $timer = document.querySelector("#timer");
   $timer.textContent = time;
   var timer = setInterval(function(){
       time--;
       $timer.textContent = time;
       if (sec < 0) {
        clearInterval(timer);
       }
   }, 1000);

   function renderQuestion(){
       var question = questions[questionIndex];
       var $question = document.querySelector("#question");
       var $answers = document.querySelector("#answers");
       $question.textContent = question.question;
       $answers.innerHTML = "";
       for(var i = 0; i < question.answers.length; i++){
           var $btn = document.createElement("button");
           $btn.textContent = question.answers[i];
           $btn.setAttribute("class", "btn btn-success ml-3 mt-3 pl-5 pr-5");
           $answers.append($btn);
       }
   };
   document
       .querySelector("#answers")
       .addEventListener("click", function(e){
           if (!e.target.matches("button")) return; 
           questionIndex++;
           renderQuestion();
       });
   renderQuestion();