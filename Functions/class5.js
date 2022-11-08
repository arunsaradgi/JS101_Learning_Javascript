let str = "nitin"

function rev(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}

let out = rev(str);

if (str === out) {
  console.log("palindrome")
} else {
  console.log("not a palindrome")
}