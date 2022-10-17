

let k = 126


let count = 0;
for (let a = 1; a <= k ** (1 / 2); a++) {

  for (let b = a + 1; b <= k ** (1 / 2); b++) {
    a ** 2 + b ** 2 == k ? count++ : "";
  }

}
count >= 1 ? console.log("true") : console.log("false");
