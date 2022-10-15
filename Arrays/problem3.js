let arr=["batman","rrr","pushpa","avengers","ghajini"];

for (let i=0;i<arr.length;i++){
  if(arr[i]=="pushpa" || arr[i]=="ghajini"){
    continue;
  }
  console.log(arr[i]);
}