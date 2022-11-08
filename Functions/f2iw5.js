// Write a custom function that has the same behavior of inbuilt Array Includes Function

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

function myIncludes(arr, value) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      flag = true;
    }
  }
  return flag;
}

let arr = ["arun", "abhi", "sonya", "bablyaa"];
let value = "bablya";

console.log(myIncludes(arr, value));





















// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // expected output: true
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// // expected output: true
// console.log(pets.includes('at'));
// // expected output: false