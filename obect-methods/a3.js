// input given
var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

// output
let arr = [];

function calculateSalesTotals() {
  for (let i = 0; i < sales.length; i++) {

    let obj = {};
    if (sales[i].discount == undefined) {
      sales[i].discount = 0.0;
    }
    obj.discount = sales[i].discount;
    obj.item = sales[i].item;
    obj.original = sales[i].original;
    obj.sale = sales[i].original - (sales[i].original * sales[i].discount);
    obj.stock = sales[i].stock;
    obj.total = obj.sale * obj.stock;
    if (sales[i].discount == 0) {
      delete obj.discount;
    }

    arr.push(obj);



  }
  console.log(arr)
}



calculateSalesTotals(sales);