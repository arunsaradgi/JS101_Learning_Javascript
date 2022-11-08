// Reversed Pyramid Star Pattern
// *********
//  *******
//   *****
//    ***
//     *

let N=5;

for(i=1;i<=N;i++){
  let bag="";
  for(j=1;j<i;j++){
    bag+=" ";
  }
  for(k=1;k<=2*(N-i)+1;k++){
    bag+="*";
  }
  console.log(bag);
}
