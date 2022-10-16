//Given a string count the number of words in that string

let str = "i am a good boy";

count = 1;

for (let i = 0; i < str.length; i++) {

  str[i] == " " ? count++ : "";

}
str.length == 0 ? console.log(0) : console.log(count);
