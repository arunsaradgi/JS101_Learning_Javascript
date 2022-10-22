//give names of people whose salary is more than 25000
let emp_details = [

  { name: "Abhi", age: 27, salary: 100000 },
  { name: "arun", age: 24, salary: 24000 },
  { name: "sonya", age: 25, salary: 54654 },
  { name: "bablya", age: 22, salary: 23565 }
];

for (let i = 0; i < emp_details.length; i++) {
  emp_details[i].salary > 25000 ? console.log(emp_details[i].name) : "";

}

