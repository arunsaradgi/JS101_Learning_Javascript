//print the below pattern
// 1
// *
// 1 2 
// * *
// 1 2 3 
// * * *
// 1 2 3 4 
// * * * *

for (let i = 1; i <= 4; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag += j + " ";
  }
  bag += "\n";
  for (let k = 1; k <= i; k++) {
    bag += "* ";
  }
  console.log(bag);
}
