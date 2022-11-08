let arr = [1, 2, 3, 4, 5];

let bag = "";

arr.forEach(function(element, index) {
  bag += element + " ";
})

console.log(bag.trim().length);
