// Write a custom function that has the same behavior of inbuilt String Substring Function.

// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

const str = 'Mozilla';
function mySubString(str, num1, num2) {
  let subStr = "";
  if (num2 != null) {
    for (let j = num1; j < num2; j++) {
      subStr += str[j];
    }
  } else {
    for (let l = num1; l < str.length; l++) {
      subStr += str[l];
    }
  }
  return subStr;
}
console.log(mySubString(str, 2, 4));


















// const str = 'Mozilla';
// console.log(str.substring(1, 3));
// // expected output: "oz"
// const str = 'Mozilla';
// console.log(str.substring(2));
// // expected output: "zilla"