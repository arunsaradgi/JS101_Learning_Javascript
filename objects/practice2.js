let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
]
let score = 0;

for (let k = 0; k < arr.length; k++) {
  let name = arr[1].students[0].name;
  for (let l = 0; l < arr[k].students.length; l++) {

    let sum = 0;
    for (let i = 0; i < arr[k].students[l].marks.length; i++) {
      sum += arr[k].students[l].marks[i];

    }
    if (sum > score) {
      for (m = 0; m <= k; m++) {
        score = sum;
        name = arr[m].students[m].name;
      }
    }
  }
  console.log(arr[k].grade + "-" + name + "-" + score);
}
  //   }
  // let sum2 = 0;
  // for (let j = 0; j < arr[k].students[1].marks.length; j++) {
  //   sum2 += arr[k].students[1].marks[j];
  // }

  // if (sum2 > sum1) {
  //   console.log(arr[k].grade + "-" + arr[k].students[1].name + "-" + sum2)
  // } else {
  //   console.log(arr[k].grade + "-" + arr[k].students[0].name + "-" + sum1)
  // }

