let sum=0;
let count=0;
for (let i=1;i<=50;i++){
  if(i%2==0){
    sum+=i;
    count++;
  }  
}
console.log(sum/count);