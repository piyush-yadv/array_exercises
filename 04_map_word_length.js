const array = ['apple', 'ball', 'cat', 'elephant'];

function mapWordLength(strArray) {
  const lengthArray = [];

  for (let i = 0; i < strArray.length; i++) {
    const length = strArray[i].length;

    lengthArray.push(length);
  }

  return lengthArray;
}

console.log(mapWordLength(array));