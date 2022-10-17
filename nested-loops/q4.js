//Nested Loop with While

// **********
// **********
// **********
// **********
// **********
// **********

let j=1;
while(j<=6){
let i=1;
let star="";
while(i<=10){
  star+="*"
  i++;
}console.log(star);
  j++;
}

console.log("----------------------------");

for(let i=1;i<=6;i++){
  let out="";
  for(let j=1;j<=10;j++){
    out+="*"
  }
  console.log(out);
}