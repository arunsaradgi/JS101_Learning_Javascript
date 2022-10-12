//Given 3 numbers (all different values), print which is greatest

let a = 100;

let b = 150;

let c = 70;

if (a > b && a > c) {
  console.log("a is the greatest");
} else if (b > a && b > c) {
  console.log("b is the greatest");
} else {
  console.log("c is the greatest");
}


//Ternary
// (a > b && a > c) ? console.log("a is the greatest") :
//   (b > a && b > c) ? console.log("b is the greatest") : console.log("c is the greatest");