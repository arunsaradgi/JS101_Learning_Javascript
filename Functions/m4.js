// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

let a=[1,2,3,4,5]

function sumOfArray(a){
  let sum=0;
    for(let i=0;i<a.length;i++){
       sum+=a[i];
    }
  return sum;
}
let avg=sumOfArray(a)/a.length;

if(a.length==0){
  console.log(0);
}else{
  console.log(avg);
}

