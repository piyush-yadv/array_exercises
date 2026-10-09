function fibonacci(n) {
  const fiboArr = [0, 1];

  if (n <= 0) return [];
  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {

    const nextTerm = fiboArr[i - 1] + fiboArr[i - 2];
    fiboArr.push(nextTerm);
  }

  return fiboArr;
}

console.log(fibonacci(4));