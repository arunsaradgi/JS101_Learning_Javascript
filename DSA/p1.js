//odd index printing
let arr = [2, 5, 6, 6, 8, 7, 7, 10];
let out = "";
for (let i = 0; i < arr.length; i++) {
  if (i % 2 != 0) {
    out += arr[i] + " ";
  }

} console.log(out);