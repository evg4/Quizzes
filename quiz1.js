const prompt = require("prompt-sync")({ sigint: true });
const quiz = require("./quiz-questions.js");
const questions = quiz.questions;
const answers = quiz.answers;

let nextQ = true;
let i = -1;
let score = 0;

console.log(
  "Welcome to the quiz. As long as you answer correctly, you can keep going. If you get an answer wrong, the quiz ends. Good luck!"
);
while (nextQ === true) {
  i++;
  let answer = prompt(questions[i]);
  if (answer.toLowerCase() === answers[i].toLowerCase()) {
    console.log("Correct!");
    nextQ = true;
    score++;
  } else {
    console.log("Incorrect!");
    nextQ = false;
  }

  if (i === questions.length - 1) {
    nextQ = false;
  }
}

if (i === questions.length - 1) {
  console.log(
    "You have finished the quiz! Your final score was " + score + "."
  );
} else {
  console.log("You lose. Your final score was " + score + ".");
}
