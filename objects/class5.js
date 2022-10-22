
let products=[
  {name:"Macbook",rating:4.6,price:180000}, {name:"iphone 14",rating:4.2,price:80000},

{name:"ipads",rating:3.8,price:55000},

{name:"Airpods",rating:4.0,price:25000}
]

// print names and price of rating >=4.0

for(let i=0;i<products.length;i++){
  products[i].rating >= 4.0?console.log(products[i].name, products[i].price):"";

}