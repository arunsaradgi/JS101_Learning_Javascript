var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];



let obj = {
  sales: sales,
  calculateSalesTotals: function() {
    let arr = [];
    for (let i = 0; i < this.sales.length; i++) {
      let obj1 = {};      
        if(this.sales[i].discount==undefined){
            obj1.item = this.sales[i].item;
            obj1.original= this.sales[i].original;
            obj1.sale= this.sales[i].original;
            obj1.stock= this.sales[i].stock;
            obj1.total= this.sales[i].stock*this.sales[i].original;   
          
        }else{
          obj1.discount=this.sales[i].discount;
            obj1.item = this.sales[i].item;
            obj1.original= this.sales[i].original;
            obj1.sale= this.sales[i].original-(this.sales[i].original*this.sales[i].discount);
            obj1.stock= this.sales[i].stock;
            obj1.total= obj1.sale * this.sales[i].stock;
          
        }arr.push(obj1);
    }
  console.log(arr);
  }
}


obj.calculateSalesTotals();