//Given a string print, the number of times each character appears

let str = "arun saradgi";

let obj = {};


for (let i = 0; i < str.length; i++) {
  let countI = 0;
  for (let j = 0; j < str.length; j++) {
    str[i] === str[j] ? countI += 1 : "";
  }
  obj[str[i]] = countI;
}
console.log(obj);


