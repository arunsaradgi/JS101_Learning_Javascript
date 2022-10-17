//Print the Calendar date in the below format
for(let j=1;j<=12;j++){

  let days;

  j==2?days=28:j==4||j==6||j==9||j==11?days=30:days=31;

  for(let i=1;i<=days;i++){
  console.log(i+"-"+j);
}
}