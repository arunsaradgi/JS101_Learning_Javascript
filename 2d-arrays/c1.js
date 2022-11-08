let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
]

let bag = "";
for (let i = 0; i < arr.length; i++) {

  for (let j = arr[i].length - 1; j >= 0; j--) {
    bag += arr[i][j] + " ";
  }

}
console.log(bag);