// Hollow Pyramid Star Pattern
//     *
//    * *
//   *   *
//  *     *
// *********

let N=6;
for(let i=1;i<=N;i++){
  let bag="";
  for(let j=N-i;j>=1;j--){
    bag+=" ";
  }
  for(let k=1;k<=2*i-1;k++){
    if(k==1||k==2*i-1||i==N){
    bag+="*";
    }else{
      bag+=" "
    }
}console.log(bag)
}