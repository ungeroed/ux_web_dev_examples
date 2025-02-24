const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // You can change the port if needed

// Sample JavaScript Quiz Data
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
    },
    {
        question: "What is the purpose of the 'use strict' directive?",
        answers: ["It enforces stricter parsing and error handling", "It improves performance", "It makes JavaScript more object-oriented", "It has no real purpose"],
        correct_answer_index: 0 
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["func myFunction() {}", "def myFunction() {}", "function myFunction() {}", "create function myFunction() {}"],
        correct_answer_index: 2 
    }
];

// Serve static files (you'll likely have a frontend to fetch the JSON) 
app.use(express.static('public')); 
app.use(cors())
// Endpoint to get quiz questions
app.get('/questions', (req, res) => {
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Quiz server listening on port ${port}`);
});
