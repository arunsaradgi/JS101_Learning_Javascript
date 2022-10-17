//Print a box patterns using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for(let i=1;i<=10;i++){
let str="";
for(let j=1;j<=10;j++){
  if(i==1||i==10){
  str+="*";
  }else{
    if(j==1||j==10){
      str+="*";
    }else{
      str+=" ";
    }
  }
}
console.log(str);
}