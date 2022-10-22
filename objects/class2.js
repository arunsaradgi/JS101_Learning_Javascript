//sum of elements whose occurance is more than  two

let arr = [7, 2, 7, 7, 3, 4, 2];

let sum = 0;

let obj = {}

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] == undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;

}

for (let key in obj) {
  obj[key] >= 2 ? sum += Number(key) : "";
}

console.log(sum)