function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let out = checkEvenOdd(3)
if (out == true) {
  console.log("even")
} else {
  console.log("odd")
}