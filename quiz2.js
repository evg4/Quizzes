const prompt = require("prompt-sync")({ sigint: true });
const quiz = require("./quiz-questions.js");
const questions = quiz.questions;
const answers = quiz.answers;

let nextQ = true;
let i = -1;
let score = 0;
let lives = 3;

console.log(
  "Welcome to the quiz. You have 3 lives. You lose one life for every incorrect answer. Can you answer all " +
    questions.length +
    " questions?"
);

while (nextQ === true) {
  i++;
  let answer = prompt(questions[i]);
  if (answer.toLowerCase() === answers[i].toLowerCase()) {
    console.log("Correct!");
    nextQ = true;
    score++;
  } else {
    console.log("Incorrect! You lose a life.");
    lives--;
  }

  if (lives === 0) {
    nextQ = false;
  }
  if (i === questions.length - 1) {
    nextQ = false;
  }
}

if (i === questions.length - 1) {
  console.log(
    "You have finished the quiz! Your final score was " +
      score +
      ". You had " +
      lives +
      " lives left."
  );
} else {
  console.log(
    "You have no lives remaining. Your final score was " + score + "."
  );
}
