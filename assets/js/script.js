var questions = [
    {
        questionText: "This is question 1",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct : "1" 

    },
    {
        questionText: "This is question 2",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "3"
    },
    {
        questionText: "This is question 3",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "4"

    },
    {
        questionText: "This is question 4",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "2"

    },
]

var currentIndex = 0;
var score = 0;
var answer ="";

var correctA=false;

function startTimer() {
    var timeleft = 10;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}

function startGame() {
    //var timerCount = 10
    console.log("startGame");
    console.log("call display question")
    displayQuestion(currentIndex);
    console.log(currentIndex, " this is the current index");
}   
    

function answerButtonClick() {
console.log("in anserButtonClick function")
console.log(questions[currentIndex].correct, " correct answer")
console.log (answer, " this is the answer")
   
if (questions[currentIndex].correct === answer){
        correctA = true;
    }
   //correct answer go to next questions
    if (correctA) {
        score++;
        currentIndex++;
        displayquestion(currentIndex)
    } else {
        timerCount = timerCount - 5;
    }
}

function displayQuestion(currentindex){
    console.log(" in display question")
    var questionEl = document.querySelector("#questionEl");
    questionEl.textContent= questions[currentIndex].questionText;
    
    startTimer();
 
 for (let i = 0; i< 4; i++) {
        correctA = false;
        document.querySelector(".btn").addEventListener("click", answerButtonClick);
   
        
     }
    


    }



document.querySelector("#startbutton").addEventListener("click", startGame)