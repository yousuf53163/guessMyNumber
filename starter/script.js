'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! try again';
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      'YOU GOT THE CORRECT NUMBER';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.score').textContent = score;

    if (score > highScore) {
      highScore = score;
      console.log(highScore);

      document.querySelector('.highscore').textContent = score;
      document.querySelector('h1').textContent = 'NEW HIGH SCORE!!!';
    } else {
      document.querySelector('h1').textContent = 'You Won But No Highscore';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry you have the lost the game';
      document.querySelector('h1').textContent = 'sorry you lost';

      document.querySelector('body').style.backgroundColor = '#238';
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Sorry you have the lost the game';
      document.querySelector('h1').textContent = 'sorry you lost';

      document.querySelector('body').style.backgroundColor = '#238';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  console.log(number);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('h1').textContent = 'Guess My Number!';
});
