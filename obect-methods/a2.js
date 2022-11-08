// let obj={ 
//   data:[{name: "Rice", quantity: 2, price:60},        {name: "Dal", quantity: 3, price: 50},
//     {name: "Salt", quantity: 1, price: 20}]
// }
let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let products = [60, 50, 20];

let object = {
  data: [],

  add: function(one, two, three) {
    for (let i = 0; i < 3; i++) {
      let obj = {};
      obj.name = one[i];
      obj.quantity = two[i];
      obj.products = three[i];
      this.data.push(obj);
    }
  },

  total: function() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i].quantity * this.data[i].products;
    }
    return sum;
  }

}

object.add(name, quantity, products);
console.log(object.total());
