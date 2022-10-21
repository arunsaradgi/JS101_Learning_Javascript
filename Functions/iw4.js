// Write a function to check if the char is a small case or not.


function checkCase(a) {
  let smallCase = "qwertyuiopasdfghjklzxcvbnm";
  let count = 0;
  for (let i = 0; i < smallCase.length; i++) {
    if (a == smallCase[i]) {
      count++;
    } else {
      count = count;
    }
  }
  count > 0 ? console.log("it is a small case character") : console.log("it is not a small case character");
}


let char = "a";
checkCase(char);