// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
// Do not use inbuilt functions and use Arrow function to do this problem



let charSwap = (char) => {
  let lower = "qwertyuiopasdfghjklzxcvbnm";
  let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

  let swap = "";
  for (let i = 0; i < 26; i++) {
    char == lower[i] ? swap += upper[i] : char == upper[i] ? swap += lower[i] : "";
  }
  return swap;
}

let swapInput = (string) => {
  let swapped = "";
  for (let i = 0; i < string.length; i++) {
    swapped += charSwap(string[i]);
  }
  return swapped;
}

let input = "BaBlOo";
console.log(swapInput(input));