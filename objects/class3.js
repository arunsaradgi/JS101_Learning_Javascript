//print the element whose occ. is 1;


let arr = [2, 3, 4, 4, 3, 2, 5, 6, 6]

let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] == undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;
}


for (let key in obj) {
  obj[key] === 1 ? console.log(key) : "";
}
