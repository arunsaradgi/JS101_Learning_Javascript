// frequency of each Element


let arr = [7, 2, 7, 7, 3, 4, 2];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] == undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;
}
console.log(obj);