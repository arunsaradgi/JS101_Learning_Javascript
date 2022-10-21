// Write a function to replace spaces in a given string with - .

let string = "I am arun saradgi";
function rep(a) {
  let newstr = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] == " ") {
      newstr += "-";
      return newstr;
    } else {
      newstr += a[i];
      return newstr;
    }
  }
}
console.log(rep(string));