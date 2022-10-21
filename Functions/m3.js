// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

let limit=11;

function isOdd(a){
  let value="";
  a%2!=0?value=true:value=false;
  return value;
}

for(let i=0;i<=limit;i++){
   let out= isOdd(i);
  out==true?console.log(i +" "+"is odd"):"";
  
}