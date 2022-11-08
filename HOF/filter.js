let arr=[1,2,3,4,5];

let new_arr=arr.filter(function(element, index){
  return element%2==1;
})
console.log(new_arr);