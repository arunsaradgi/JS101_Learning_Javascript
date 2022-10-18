//Given an array find the unique items in the array

let arr = ["arun", "babloo", "sonu", "abhi", "arun", "sonya", "sonu", "babloo"];

let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = 1;
}
console.log(obj);


// let arr1 = [2, 3, 4, 5, 6, 11, 20, 30, 11, 2, 5, 4, 6];
// let obj1 = {};
// for (let i = 0; i < arr1.length; i++) {
//   obj1[arr1[i]] = "only once";
// }
// console.log(obj1);

