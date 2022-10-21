// Use the above function to print the Primes from 2 to a given limit

let limit = 20;

function prime(a) {
  let count = 0;
  for (let i = 2; i <= a / 2; i++) {
    a % i == 0 ? count++ : "";
  }
  if (count == 0) {
    console.log(a + " is " + "prime");
  }
}



for (let j = 2; j <= limit; j++) {
  prime(j)
}


