const matrix = [
  [2, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

function sumMatrix(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {

      sum = sum + array[i][j];
    }
  }

  return sum;
}

console.log(sumMatrix(matrix));