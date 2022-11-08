// Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

let N=5;
for(let i=1;i<=N;i++){
  let bag="";
  for(let j=1;j<=N;j++){
    if(j<=N-i+1){
      bag+="*";
    }
  }
  console.log(bag)
}
// --------------------------****-----------------------
for(let i=N;i>=1;i--){
  let bag="";
  for(let j=1;j<=i;j++){
    bag+="*";
  }
  console.log(bag);
}