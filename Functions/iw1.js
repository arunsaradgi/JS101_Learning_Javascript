// Create a function to check if a number is Prime or Not

function prime(a) {
  let count = 0;
  for (let i = 2; i < a / 2; i++) {
    a % i == 0 ? count++ : "";
  }
  if (count == 0) {
    return a + " is " + "prime";
  } else {
    return a + " is " + "not a prime";
  }
}

let num = 13
console.log(prime(num))