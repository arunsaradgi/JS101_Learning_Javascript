// given an array find out the number of elements for which the neighbours are greater than the element

arr = [5, 7, 6, 9, 8, 10, 1, 2];
let count = 0;
for (let i = 1; i < arr.length - 1; i++) {
  arr[i] < arr[i - 1] && arr[i] < arr[i + 1] ? count++ : "";
}
console.log(count);