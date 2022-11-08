// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

let details={
  arr : [],
  add:function (name, eng, maths, french) { 
  let obj = {};
  obj.name = name;
  obj.eng = eng;
  obj.maths = maths;
  obj.french = french;
  this.arr.push(obj);
},

   lowest: function(){
    let min=Infinity;
    let lowestStudent;
    for(let i=0;i<this.arr.length;i++){
    let total=this.arr[i].eng + this.arr[i].maths + this.arr[i].french;
    if(total<min){
      min=total;
      lowestStudent=this.arr[i].name;
  }
}
return lowestStudent;
},

   highest: function(){
    let max=0;
    let highestStudent;
    for(let i=0;i<this.arr.length;i++){
        let total=this.arr[i].eng + this.arr[i].maths + this.arr[i].french;
        if(total>max){
        max=total;
        highestStudent=this.arr[i].name;
        }
    }
    return highestStudent;
  }
}


 
details.add("arun", 10, 9, 9);
details.add("abhi", 9, 9, 9);
details.add("chunnu", 8, 8, 8);
console.log(details.arr);


console.log(details.lowest());
console.log(details.highest());
