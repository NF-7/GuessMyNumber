'use strict';

// CLEAN DRY (Don't Repeat Yourself) CODE

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeBackground = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

const numberSize = function (numberSize) {
  document.querySelector('.number').style.width = numberSize;
};

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Prični ugibati ...');
  changeBackground('#222');
  numberSize('15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input or wrong input
  if (!guess) {
    displayMessage('❔ Ni izbranega števila!');
  } else if (guess < 0) {
    displayMessage('🚫 Število neveljavno!');
  } else if (guess > 20) {
    displayMessage('❌ Izbrano število ni med 1 in 20!');

    // player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Pravilno!');
    changeBackground('#60b347');
    numberSize('25rem');
    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Število preveliko!' : '📉 Število prenizko!'
      );
      scoreNumber = scoreNumber - 1;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      displayMessage('😭 Izgubili ste igro!');
      document.querySelector('.score').textContent = 0;
      changeBackground('red');
      document.querySelector('.number').style.width = '25rem';
    }
  }
});
