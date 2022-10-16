let arr = ["arun", "Abhi", "kasturi", "saradgi"];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == "A" || arr[i][0] == "a") {
    count += 1;
  }

} console.log(count);