const array = ['apple', 'cake', 'tea', 'coffee', 'tea'];

function findIndex(arr, element) {
  let indexOfElement = -1;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === element) {
      indexOfElement = i;
      break;
    }
  }

  return indexOfElement;
}

console.log(findIndex(array, 'tea'));