function checkNum(num) {
  if (num % 2 == 0) {
    return true
  } else {
    return false
  }
}

let count = 0;
for (let i = 1; i <= 15; i++) {
  let ans = checkNum(i);
  if (ans == true) {
    count++;
  }
}
console.log(count);