const prompt = require("prompt-sync")({ sigint: true });
const quiz = require("./quiz-questions.js");
const questions = quiz.questions;
const answers = quiz.answers;

let score = 0;
let incorrect = [];

console.log(
  "Welcome to the quiz. You may attempt all questions. To skip a question, hit enter. When you have finished, you will find out your final score and the answers to any questions you got wrong."
);

for (let i = 0; i < questions.length; i++) {
  let answer = prompt(questions[i]);
  if (answer.toLowerCase() === answers[i].toLowerCase()) {
    score++;
  } else {
    incorrect.push(
      questions[i] + " You said: " + answer + ". The answer was: " + answers[i]
    );
  }
}

if (score < questions.length) {
  console.log(
    "You have finished the quiz. Your final score was: " +
      score +
      " out of " +
      questions.length +
      ". Here are the answers to the questions you got wrong: " +
      incorrect.join("; ")
  );
} else {
  console.log(
    "You have finished the quiz. Your final score was: " +
      score +
      " out of " +
      questions.length +
      "."
  );
}
