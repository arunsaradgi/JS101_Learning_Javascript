// Left Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****

let N=5;
for(let i=1;i<=N;i++){
  let bag="";
  for(let j=1;j<=i;j++){
   bag+="*"; 
  }
  console.log(bag);
}