const array = [1, 2, 3, 4];

function reverse(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }

  return newArr;
}

console.log(reverse(array));


// second Approach....
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }