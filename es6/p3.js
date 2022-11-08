function total(arr, k) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % k == 0) {
      sum += arr[i];
      return sum;
    }
  }
};

const answer = total([2, 1, 3, 6, 7, 2, 3, 1], 3);

console.log(answer);
