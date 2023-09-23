'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let currentScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (currentScore < 1) {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
    return;
  }

  if (!guessNumber) {
    displayMessage('⛔️ No number!');
  } else if (guessNumber === secretNumber) {
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = currentScore;
    }
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    return;
  } else if (guessNumber !== secretNumber) {
    currentScore--;
    document.querySelector('.message').textContent =
      guessNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!';
    document.querySelector('.score').textContent = currentScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  displayMessage('Star guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  currentScore = 20;
});
