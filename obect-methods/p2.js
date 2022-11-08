let obj = {
  l: 20,
  w: 30,
  area: function() {
    return (this.l) * (this.w);
  },
  perimeter: function() {
    return 2 * ((this.l) + (this.w));
  }

}

console.log(obj.area());
console.log(obj.perimeter());
