
function prime(a){
  let count=0
  for(let i=2;i<a/2;i++){
    a%i==0?count++:"";
  }
  count==0?console.log("prime"):console.log("not prime");
}

prime(24)