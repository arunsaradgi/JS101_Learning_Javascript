// function print(x = "no input", y = "no input") {
//   console.log(x, y);
// }
// print()

let obj = {
  print: function(x = "no input", y = "no input") {
    console.log(x, y);
  }
}

obj.print(10)