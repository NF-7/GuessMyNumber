'use strict';

/* Examples of DOM Manipulation

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

// STEP BY STEP CODE

// CODING CHALLENGE - real solution bellow reseting the whole page

/* reseting the whole page

document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});

*/

/*

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = 20;

let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input or wrong input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';
  } else if (guess < 0) {
    document.querySelector('.message').textContent = 'Number invalid 🚫';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Number is not between 1 and 20 🚫';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '25rem';

    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess too high
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        'Your guess is too high! 📈';
      scoreNumber = scoreNumber - 1;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }

    // guess too low
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        'Your guess is too low! 📉';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

*/

// CLEAN DRY (Don't Repeat Yourself) CODE

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input or wrong input
  if (!guess) {
    displayMessage('❔ No number!');
  } else if (guess < 0) {
    // could also use upper displayMessage function
    document.querySelector('.message').textContent = '🚫 Number invalid';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      '❌ Number is not between 1 and 20!';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '25rem';

    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess is wrong (too high or too low)
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      //Same effect as lower displayMessage function!
      /*

        document.querySelector('.message').textContent =
          guess > secretNumber
            ? '📈 Your guess is too high!'
            : '📉 Your guess is too low!';
            
        */
      displayMessage(
        guess > secretNumber
          ? '📈 Your guess is too high!'
          : '📉 Your guess is too low!'
      );
      scoreNumber = scoreNumber - 1;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '25rem';
    }
  }
});
