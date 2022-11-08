// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function.
let char = "Z";

let charToLower = (char) => {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let out = "";
  for (let i = 0; i < upper.length; i++) {
    upper[i] == char ? out += lower[i] : "";
  }
  return out;
}

let wordToLower = (word) => {
  let bag = "";
  for (let i = 0; i < word.length; i++) {
    bag += charToLower(word[i]);
  }
  return bag;
}

let arrToLower = (a) => {
  // let out1 = [];
  // for (let i = 0; i < a.length; i++) {
  //   out1.push(wordToLower(a[i]));
  // }
  let out = [];
  a.forEach((element, index) => {
    out[index] = wordToLower(element);
  })
  return out;
}

let arr = ["MA", "SA", "I", "SCH", "OOL"]
console.log(arrToLower(arr));