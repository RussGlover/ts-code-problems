const fib = (n: number): number => {
  if (n < 0) {
    throw new Error("Invalid fib index");
  }
  if (n < 2) {
    return n;
  }
  let twoBack = 0;
  let oneBack = 1;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    current = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = current;
  }
  return current;
};
export default fib;
