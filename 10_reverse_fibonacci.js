function reverseFibonacci(n) {
  const revFibo = [1, 0];

  if (n <= 0) return [];
  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {

    const nextTerm = revFibo[0] + revFibo[1];
    revFibo.unshift(nextTerm);
  }

  return revFibo;
}

console.log(reverseFibonacci(5));