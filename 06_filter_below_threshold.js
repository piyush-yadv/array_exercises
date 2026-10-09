const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterBelowThreshold(arr, thresold) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < thresold) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filterBelowThreshold(array, 4));