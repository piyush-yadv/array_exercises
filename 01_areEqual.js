const a = [2, [2, [2, [2, [3, 4], 3], 3], 4], 4, 6, [1]];
const b = [1, [2, [2, [2, [3, 4], 3], 3], 4], 4, 6, [1]];

function areEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {

    const areBothObjects = Array.isArray(a[i]) && Array.isArray(b[i]);

    const areElementsEqual = areBothObjects ? areEqual(a[i], b[i]) : a[i] === b[i];
    if (!areElementsEqual) return false;
  }

  return true;
}

console.log(areEqual(a, b));