export const hasSumPair = (sum: number, numbers: number[]): boolean => {
  if (numbers.length < 2) {
    throw new Error("must have at least 2 elements in numbers array");
  }
  const sumsHash = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (sumsHash.has(numbers[i])) {
      return true;
    }
    sumsHash.add(sum - numbers[i]);
  }
  return false;
};
