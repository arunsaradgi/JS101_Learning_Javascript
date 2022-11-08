// // Write a custom function that has the same behavior of inbuilt Array Slice Function

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(mySlice(animals, 2, -1));


const arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
function mySlice(arr, num1, num2) {
  let out = [];
  if (num1 > 0 && num2 == null) {
    for (i = num1; i < arr.length; i++) {
      out.push(arr[i]);
    }
  } else if (num1 > 0 && num2 < 0) {
    let index1 = arr.length + (num2);
    for (let l = num1; l < index1; l++) {
      out.push(arr[l]);
    }
  }
  else if (num1 > 0 && num2 != null) {
    for (let j = num1; j < num2; j++) {
      out.push(arr[j]);
    }
  } else if (num1 < 0 && num2 == null) {
    let index = arr.length + (num1);
    for (let k = index; k < arr.length; k++) {
      out.push(arr[k]);
    }
  } else if (num1 == null && num2 == null) {
    for (let i = 0; i < arr.length; i++) {
      out.push(arr[i]);
    }
  }
  return out;
}





console.log(mySlice(arr));