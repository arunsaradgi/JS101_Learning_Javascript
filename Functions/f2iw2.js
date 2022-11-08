// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

const arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Penguin'];
function myLastIndexOf(arr, string) {
  let out = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == string) {
      out = i;
      break;
    }
  }
  return out;
}

console.log(myLastIndexOf(arr, "Penguin"));