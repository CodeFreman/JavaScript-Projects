// Write numbers 1 - 100 so it appears vertically on the document.
let i = 0;
while (i <= 99) {
  i++;

  // Check if i is divisible by 3 and 5.
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(i + '. Fizz! Buzz! <br>')
  } else if (i % 3 == 0) {
    document.write(i + '. Fizz! <br>')
  } else if (i % 5 == 0) {
    document.write(i + '. Buzz! <br>')
  } else {
    document.write(i + '. <br>')
  }
}