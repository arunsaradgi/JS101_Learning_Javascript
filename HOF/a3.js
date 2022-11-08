// Problem 3: Taking the following array into consideration get the output as given below:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7

let arr = [3, 4, 5, 6, 7];

let bag = "";

arr.forEach(function(element, index) {
  if (index < arr.length - 1 && index % 2 == 0) {
    bag += element + " - ";
  } else if (index == arr.length - 1 && index % 2 == 0) {
    bag += element;
  }
})

console.log(bag);

