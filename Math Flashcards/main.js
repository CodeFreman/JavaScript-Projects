// Multiplication Flash Cards 1-12

var num1 = Math.floor((Math.random()) * 12) + 1;
var num2 = Math.floor((Math.random()) * 12) + 1;
var correctAnswer = num1 * num2;



document.getElementById("equation").innerHTML = `${num1} * ${num2} = ?`;



function multiplication() {
  var answer = document.getElementById("answer").value;
  isNaN(answer);
  if (isNaN(answer)) {
    document.getElementById("output").innerHTML = `Sorry, ${answer} Is not a number!`;
  } else {
    if (answer == correctAnswer) {
      document.getElementById("output").innerHTML = `Correct, the answer is ${correctAnswer}.`;
    } else if (answer !== correctAnswer) {
      document.getElementById("output").innerHTML = `Sorry, ${answer} is incorrect. <br>The correct answer is ${correctAnswer}.`;
    }
  };
}

function newCard() {
  document.getElementById("output").innerHTML = ``;
  document.getElementById("answer").value = ``;
}