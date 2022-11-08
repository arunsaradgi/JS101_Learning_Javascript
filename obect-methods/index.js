function patterPrint(arr) {
  let bag = "*";

  
  for (let i = 0; i < arr.length; i++) {
    bag = bag + "_" + arr[i];

  }

  return bag.trim()

}

let arr = ["ab", "cd", "e", "fgh", " "];
console.log(patterPrint(arr));


