const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddArray(arr) {
  const oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    const isOdd = arr[i] !== 0;

    if (isOdd) {
      oddArr.push(arr[i]);
    }
  }

  return oddArr;
}

console.log(oddArray(array));