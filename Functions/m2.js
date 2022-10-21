// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

// NOTE: It must consist of two functions 
// 1. To find the difference 
// 2. To find the absolute value
// https://en.wikipedia.org/wiki/Absolute_value

function difference(a,b){
  return a-b;
}
function absoluteValue(value){
  value<0?value=value*(-1):"";
  return value;
}

let sub=difference(4,18)
let output=absoluteValue(sub);

console.log(output)
