// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)
// Do this using Arrow Function


let isOdd = (num) => {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

let limit = 11;

for (let i = 0; i <= limit; i++) {
  if (isOdd(i)) {
    console.log(i);
  }
}