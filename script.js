'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;
let currentScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (currentScore < 1) {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
    return;
  }

  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    return;
  } else if (guessNumber > secretNumber) {
    currentScore--;
    document.querySelector('.message').textContent = '📈 Too High!';
    document.querySelector('.score').textContent = currentScore;
  } else if (guessNumber < secretNumber) {
    currentScore--;
    document.querySelector('.message').textContent = '📉 Too Low!';
    document.querySelector('.score').textContent = currentScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Star guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
