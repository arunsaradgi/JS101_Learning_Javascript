// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let output = {
  rectangle: {},

  add: function(l, w) {
    this.rectangle.length = l;
    this.rectangle.width = w;
  },

  area: function() {
    return (this.rectangle.length * this.rectangle.width);
  },

  perimeter: function() {
    return (2 * (this.rectangle.length + this.rectangle.width));
  }

}

output.add(30, 20);
console.log(output.rectangle);
console.log(output.area());
console.log(output.perimeter());

