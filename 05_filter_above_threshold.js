const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function aboveThreshold(array, threshold) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] > threshold) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(aboveThreshold(array, 5));