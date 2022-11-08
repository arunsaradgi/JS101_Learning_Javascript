// Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

let N=6;
for(let i=1;i<=N;i++){
  let bag="";
  for(let j=1;j<=i;j++){
    if(i==j||i==N||j==1){
      bag+="*";
    }else{
      bag+=" ";
    }
  }
  console.log(bag);
}