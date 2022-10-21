// Use the same function to print Non-Primes from 2 to a given limit


let limit = 20;

function nonprime(a) {
  let count = 0;
  for (let i = 2; i <= a / 2; i++) {
    a % i == 0 ? count++ : "";
  }
  if (count > 0) {
    console.log(a + " is " + "nonprime");
  }
}



for (let j = 2; j <= limit; j++) {
  nonprime(j)
}