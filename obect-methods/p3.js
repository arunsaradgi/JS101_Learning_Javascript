let details = {
  name: "Ram",
  age: 39,
  hobbies: ["coding", "reading", "biking"],

  NAME: function() {
    console.log(this.name);
  },
  Age: function() {
    console.log(this.age);
  },
  HOBBIES: function() {
    console.log("My bobbies are " + this.hobbies.join());
  }
}

details.NAME();
details.Age();
details.HOBBIES();