//Print Prime Numbers from 1 to given limit

let limit=23;
for(let j=2;j<=limit;j++){
let count=0;
for(let i=2;i<=j/2;i++){
  j%i==0?count++:"";
}
count==0?console.log(j + " is a prime number"):console.log(j + " is not a prime number");
}