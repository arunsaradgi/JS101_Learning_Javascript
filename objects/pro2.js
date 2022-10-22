let arr=[
	{	grade: "V",
		students: [{name: "Nrupul", marks: [10, 20, 30]},{name: "Prateek", marks: [20, 30, 40]}]
	},
  {	grade: "VI",
		students: [{name: "Aman", marks: [10, 20, 30]},{name: "Albert", marks: [20, 30, 40]}]
	},
	{	grade: "VII",
		students: [{name: "Yogesh", marks: [10, 20, 30]},{name: "Sandhya", marks: [20, 30, 40]}]
	}
];

// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

for(let i=0;i<arr.length;i++){
  let sumarr=[];
  for(let j=0;j<arr[i].students.length;j++){
    let sum=0;
    for(let k=0;k< arr[i].students[j].marks.length;k++){
      sum+=arr[i].students[j].marks[k];

      sumarr.push(sum)
    let largest=sumarr[0];
    for(let l=1;l<sumarr.length;l++){
      sumarr[l]>largest?console.log(arr[i].grade+ "-" +arr[i].students[l].name[l]+ "-" + sum): console.log(arr[i].grade + "-"+ arr[i].students[l].name[l]+ "-" + largest);
      
    } 
      
      
  
}
    
    
   
  }
}
// }console.log(sumarr)}