let arr = [1, 2, 1, 3, 2, 5];
let n = 6;
let obj = {};
for (let i = 0; i < n; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}

for (let x in obj) {
  if (obj[x] = 1) {
    console.log(x)
  }
}