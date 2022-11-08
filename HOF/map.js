let arr = [1, 2, 3, 4, 5];

let new_arr = arr.map(function(element, index) {
  return element * index;
})

console.log(new_arr);