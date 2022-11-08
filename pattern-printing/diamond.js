// Diamond Pattern in Javascript
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let N=5;

for(let i=1;i<=N;i++){
  let bag="";
  for(let j=N-i;j>=1;j--){
    bag+=" ";
  }
  for(let k=1;k<=2*i-1;k++){
    bag+="*";
  }
  console.log(bag)
}


  for(let i=1;i<=N-1;i++){
  let out="";
    for(let j=1;j<=i;j++){
    out+=" "
  }
    for(let k=2*(N-i)-1;k>=1;k--){
      out+="*"
    }
    console.log(out);
  }
  