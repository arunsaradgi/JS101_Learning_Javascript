function checkNum(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let bag="";
for (let i = 1; i <= 15; i++) {
  let ans = checkNum(i);
  if (ans == false) {
    bag+=i+" ";
  }
}
console.log(bag);