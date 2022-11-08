// Javascript Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********

let N=5;
for(let i=1;i<=N;i++){
   let bag="";
    for(let j=1;j<=N;j++){
      if(i<N-j+1){
        bag+=" ";
      }else{
        bag+="*";
      }
    }
  for(let k=i;k<=i;k++){
    for(let l=2;l<=i;l++){
      bag+="*";
    }
        
      }
  console.log(bag);
}