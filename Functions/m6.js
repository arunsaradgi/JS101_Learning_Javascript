// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
let lowerStr = "qwertyuiopasdfghjklzxcvbnm";
let upperStr = "QWERTYUIOPASDFGHJKLZXCVBNM";

let str = "Test";

function smallerToUpper(a) {
  let out1 = ""
  for (let i = 0; i < lowerStr.length; i++) {
    a == lowerStr[i] ? out1 = upperStr[i] : "";
  }
  return out1;
}

function UpperTosmaller(b) {
  let out2 = ""
  for (let j = 0; j < upperStr.length; j++) {
    b == upperStr[j] ? out2 = lowerStr[j] : "";
  }
  return out2;
}

for (let k = 0; k < str.length; k++) {
  let newStr = "";
  for (let l = 0; l < lowerStr.length; l++) {
    if (str[k] == lowerStr[l]) {

      newStr += smallerToUpper(k)
    } else {
      newStr += UpperTosmaller(k);

    }

  } console.log(newStr);
}