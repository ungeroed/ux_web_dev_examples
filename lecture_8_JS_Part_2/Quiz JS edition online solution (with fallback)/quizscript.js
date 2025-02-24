let questionArr = [];
let currentQuestionNumber = 0;
let correct_answer_number = 0;

// Sample JavaScript Quiz Data pasted from the text file
const questions = [
    {
        question: "What is the 'this' keyword in JavaScript?",
        answers: ["It refers to the current object", "It's a global variable", "It's always undefined", "It refers to the parent function"],
        correct_answer_index: 0 
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: ["Number", "String", "Object", "Boolean"],
        correct_answer_index: 2 
    }
];
//here we use the offline questions and just set the questionArr to use the questions array.
questionArr = questions;

function loadQuestion(){
    const myHeading = document.getElementById('question');
    myHeading.innerText = questionArr[currentQuestionNumber].question;

    const button1 = document.getElementById('button1');
    button1.innerText = questionArr[currentQuestionNumber].answers[0];

    const button2 = document.getElementById('button2');
    button2.innerText = questionArr[currentQuestionNumber].answers[1];

    const button3 = document.getElementById('button3');
    button3.innerText = questionArr[currentQuestionNumber].answers[2];

    const button4 = document.getElementById('button4');
    button4.innerText = questionArr[currentQuestionNumber].answers[3];

    correct_answer_number = questionArr[currentQuestionNumber].correct_answer_index;
}
loadQuestion();
//------------------- clicked button --------------

function checkAnswer(answerIndex){
    const correct = answerIndex == correct_answer_number;
    if(correct){
        currentQuestionNumber++;
        loadQuestion();
    }else{
        alert("Wrong, try again!");
    }
}


//----------------------- fetching questions from server ------------
//fetching questions from the server
async function fetchQuestions() {
    const response = await fetch('http://localhost:3000/questions'); 
    
    if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
}

fetchQuestions().then(fetchedQuestions => {
    //here we use the fetched questions instead of the questions arr
    questionArr = fetchedQuestions;
    console.log("fetched the questions")
    //we run load questions after fetching them
    loadQuestion();
}).catch((error)=>{
    console.log("could not fetch questions.")
    //if the fetch fails, we revert to using the offline questions from the array
    questionArr = questions;
});



//------------------------------