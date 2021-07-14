var winScore = 0;
var timer;
var timerCount;


var questions = [
    {
        questiontext: "This is question 1",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 1

    },
    {
        questiontext: "This is question 2",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 4
    },
    {
        questiontext: "This is question 3",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 3

    },
    {
        questiontext: "This is question 4",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correctAnswerIndex: 1

    },
]
var gameInfo = {
    currentQuestion: {}
}

function startGame() {
    var timerCount = 10
   // startTimer();

    console.log("startGame");

    for (let index = 0; index < 4; index++) {

        placeQuestionOnPage(questions[index]);


    }
}
function placeQuestionOnPage(question){
    console.log("place on page");
    var correctAnswerIndex = question.correctAnswerIndex;
    var {questiontext, answers}=question;

    // get current question
    gameInfo.currentQuestion = question;

    var qustionContainer = document.querySelector('questionContainer');
    // create the header for the question
    var qText = document.createElement('h2');
    qText.textContent = question.questiontext;
    // create ordered list for answers
    var answerItem = document.createElement('ol');
    // array to hold the list of possible answers to the question.
    var answerItems = [];

    console.log("the question is " + questiontext);

    for (let i = 0; i< answers.length; i++) {
        console.log("in answer loop");

        // create list items for the ol
        var answerItem = document.createElement('li')

        // create button player pushes to choose answer
        var answerItemBtn = document.createElement("button");
        // add text to button
        answerItemBtn.textContent = answers[i];
        // data-index attr for each item
        answerItemBtn.dataset.index = i;
       
        answerItem.append(answerItemBtn);
        answerItems.push(answerItem)
        
    }
    answerList.append(answerItems);
    questionContainer.append(qText);
    console.log(answerItem[i] + " are the answers");

    for (let i = 0; i < answerItems.length; i++) {
        answerList.append(answerItems[i]);
       console.log(answerItems[i] + " is in the answerList");
    }
    questionContainer.append(qText, answerList);
}
document.querySelector("#startbutton").addEventListener("click", startGame)