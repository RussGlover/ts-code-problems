export const findRotationPoint = (words: string[]): number => {
  if (words.length < 2) return 0;
  let minIndex = -1;
  let maxIndex = words.length;
  while (minIndex + 1 < maxIndex) {
    let distance = maxIndex - minIndex;
    const midpoint = Math.floor(distance / 2 + minIndex);
    if (words[midpoint] < words[0]) {
      maxIndex = midpoint;
    } else {
      minIndex = midpoint;
    }
    if (minIndex + 1 === maxIndex) {
      if (maxIndex === words.length) {
        return 0;
      }
      return maxIndex;
    }
  }
  throw new Error("failed to find rotation index");
};
