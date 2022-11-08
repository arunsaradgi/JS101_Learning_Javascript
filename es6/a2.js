// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// Do this Problem using Arrow Function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = (a) => {
  let bag = 0;
  arr.forEach((ele, ind) => {
    bag += ele
  })
  return bag;
}

let avg = (a, b) => {
  if (arr.length == 0) {
    return 0;
  } else {
    return a / arr.length;
  }
}

console.log(avg(sum(arr), arr));