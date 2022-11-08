// Write a custom function that has the same behavior of inbuilt Array Join

const arr = ['Fire', 'Air', 'Water'];

function myJoin(arr, symbol) {
  let out = ""
  for (let i = 0; i < arr.length - 1; i++) {
    out += arr[i] + symbol;
  }
  out += arr[arr.length - 1];
  return out;
}

console.log(myJoin(arr, "-"));

