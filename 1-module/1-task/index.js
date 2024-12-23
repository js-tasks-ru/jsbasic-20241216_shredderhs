function factorial(n) {
  let fact = 1;
  for (let i = 0; i < n; i++) {
    fact = fact * (n - i);
  }
  return fact;
}
