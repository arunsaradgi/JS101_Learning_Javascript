let str = "rhythm";

let output = "";
for (let i = 0; i < str.length; i++) {
  str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ? output += str[i] : "";

}
output == "" ? console.log("Not Found") : console.log(output);