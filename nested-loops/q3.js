// Combining Code 6 and Code 8 form a pyramid.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(let i=1;i<=5;i++){
  let out="";
  for(let j=1;j<=i;j++){
    out+=j+" ";
  }console.log(out);
}
for(let k=4;k>=1;k--){
  let dec="";
  for(let l=1;l<=k;l++){
    dec+=l+" ";
  }console.log(dec);
}