"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let turn = 5;
let highScore = 0;

const displayGuess = function (message) {
  document.querySelector(".guess").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  if (!guess) {
    displayGuess("⛔️ No number");
  } else if (guess > randomNumber && turn > 0) {
    displayGuess("Too high");
    turn--;
    document.querySelector(".turnAll").textContent = turn;
    if (turn == 0) displayGuess("Too high");
  } else if (guess < randomNumber && turn > 0) {
    displayGuess("Too low");
    turn--;
    document.querySelector(".turnAll").textContent = turn;
    if (turn == 0) displayGuess("You lost the game");
  } else if (guess === randomNumber) {
    displayGuess("Correct number");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = randomNumber;
    if (turn > highScore) {
      document.querySelector(".highScore").textContent = turn;
      highScore = turn;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  turn = 5;
  document.querySelector(".turnAll").textContent = "5";
  document.querySelector(".input").value = "";
  document.querySelector(".guess").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "10rem";
  document.body.style.backgroundColor = "rgb(34, 34, 34)";
});
