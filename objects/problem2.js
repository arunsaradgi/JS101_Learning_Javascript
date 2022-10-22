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
//V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90



for (let k = 0; k < arr.length; k++) {

  let sum1 = 0;
  for (let i = 0; i < arr[k].students[0].marks.length; i++) {
    sum1 += arr[k].students[0].marks[i];
  }
  let sum2 = 0;
  for (let j = 0; j < arr[k].students[1].marks.length; j++) {
    sum2 += arr[k].students[1].marks[j];
  }

  if (sum2 > sum1) {
    console.log(arr[k].grade + "-" + arr[k].students[1].name + "-" + sum2)
  } else {
    console.log(arr[k].grade + "-" + arr[k].students[0].name + "-" + sum1)
  }

}