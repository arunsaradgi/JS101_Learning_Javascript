// Right Triangle Pattern in Javascript
//     *
//    **
//   ***
//  ****
// *****

let N=5;

for(let i=1;i<=N;i++){
 let bag="";
  for(let j=1;j<=N-i;j++){
    bag+=" ";
  }
  for(let k=1;k<=i;k++){
    bag+="*"
  }
  console.log(bag);
}