let products = ["Macbook", "iphone 14", "airpods", "ipad"];
let price = [180000, 80000, 25000, 55000];
// [
// {name:"Macbook",price:180000}, 
// {name:"iphone 14",price:80000},
// {name:"ipads",price:55000},
// {name:"Airpods",price:25000}
// ]

let arr1 = []

for (let j = 0; j < products.length; j++) {
  let obj = {}
  obj["name"] = products[j];
  obj["price"] = price[j];
  arr1[j] = obj;
}
console.log(arr1);



// let obj1 = {};
// let obj2 = {};
// let obj3 = {};
// let obj4 = {};
// let obj5 = {};

// obj1["name"] = products[0];
// obj1["price"] = price[0];
// obj2["name"] = products[1];
// obj2["price"] = price[1];
// obj3["name"] = products[2];
// obj3["price"] = price[2];
// obj4["name"] = products[3];
// obj4["price"] = price[3];
// obj5["name"] = products[4];
// obj5["price"] = price[4];

// let arr = [];

// arr[0] = obj1;
// arr[1] = obj2;
// arr[2] = obj3;
// arr[3] = obj4;

// console.log(arr)