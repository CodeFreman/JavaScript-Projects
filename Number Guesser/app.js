// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for Guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate Input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if won
  if(guess === winningNum){
    // Game Over - Won

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0){
      // Game Over - Lost

      gameOver(false, `Game Over, YOU LOSE! The correct answer was ${winningNum}.`);

    } else {
      // Game Continues - Answer Wrong

      // Change Border Color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
      // Tell User Wrong Answer
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
    }
  }

});

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable Input
  guessInput.disabled = true;
  // Change Border Color
  guessInput.style.borderColor = color;
  // Set Text Color
  message.style.color = color;
  // Set Message
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


// Set Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}