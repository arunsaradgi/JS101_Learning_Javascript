let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let ages = [32, 30, 26, 28, 44];


let arr = []
for (let i = 0; i < names.length; i++) {
  let obj = {};
  obj["name"] = names[i];
  obj["age"] = ages[i];
  arr[i] = obj;

}

let output = "";
for (let j = 0; j < arr.length; j++) {
  arr[j].age > 30 ? output += arr[j].name + " " : "";
}
console.log(output);