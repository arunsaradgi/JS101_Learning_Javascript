let num = -10;
count = 0;
for (let i = 2; i <= num / 2; i++) {
  num % i === 0 ? count++ : "";
}

count == 0 ? console.log("Prime Number") : console.log("Not a Prime Number");