let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

for (let i = 0; i < arr.length; i++) {
  let bag = "";
  if (i % 2 == 0) {
    for (let j = 0; j < arr[i].length; i++) {
      bag += arr[i][j] + " ";
    }
  } else {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      bag += arr[i][j] + " ";
    }
  }
  console.log(bag);
}