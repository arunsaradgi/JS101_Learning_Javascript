//print the below pattern
// 1
// *
// 1 2 
// * *
// 1 2 3 
// * * *
// 1 2 3 4 
// * * * *


for (let a = 1; a <= 4; a++) {
  let bag = "";

  for (let b = 1; b <= a; b++) {
    bag += b + " ";


  }

  bag = bag + "\n";
  for (let c = 1; c <= a; c++) {
    bag += "* "
  }
  console.log(bag);

}




// function patternOfN(N) {
//     // Write code here

//    //let str="";
//    let start=1;

//    for(let i=1;i<=N;i++){
//       let str="";
//        for(let j=1;j<=N;j++){

//            str+=start+" ";
//            start++;
//        }
//      //str+="\n";
//      console.log(str);
//    }
//    //console.log(str);
// }