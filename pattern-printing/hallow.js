// Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

let N=5;

for(let i=1;i<=N;i++){
  let bag="";
  for(let j=1;j<=N;j++){
      if(i>1&&i<N&&j>1&&j<N){
        bag+=" ";
      }else{
        bag+="*";
      }
    }
  console.log(bag);
}