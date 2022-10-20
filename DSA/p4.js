let str = "rhythm";

let output = "";
for (let i = 0; i < str.length - 1; i++) {
  str[i + 1] == "a" || str[i + 1] == "e" || str[i + 1] == "i" || str[i + 1] == "o" || str[i + 1] == "u" ? output += str[i] : "";
}
output == "" ? console.log("Not found") : console.log(output);