const array = ['apple', 'cake', 'tea', 'coffee', 'tea',];

function findLastIndex(arr, element) {
  let indexOfElement = -1;

  for (let i = arr.length - 1; i >= 0; i--) {

    if (arr[i] === element) {
      indexOfElement = i;
      break;
    }
  }

  return indexOfElement;
}

console.log(findLastIndex(array, 'tea'));