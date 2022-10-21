// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let arr=["MA", "SA", "I", "SCH", "OOL"];

function lowerChar(a){
  let lowerStr="qwertyuiopasdfghjklzxcvbnm";
  let upperStr="QWERTYUIOPASDFGHJKLZXCVBNM";
  
  let newStr="";
  for(let i=0;i<upperStr.length;i++){
    a==upperStr[i]?newStr+=lowerStr[i]:"";
  }
  return newStr;
}

function lowerWord(word){
  let newWord=""
  for(let j=0;j<word.length;j++){
    
    newWord+=lowerChar(word[j]);
  }
  return newWord;
}

function arrConvert(arr){
  let smallArr=[];
  for(let k=0;k<arr.length;k++){
    smallArr.push(lowerWord(arr[k]));
  }
  return smallArr;
}

console.log(arrConvert(arr))