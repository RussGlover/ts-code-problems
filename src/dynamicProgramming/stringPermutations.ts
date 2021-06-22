export const stringPermutations = (
  s: string,
  index: number = 0
): Set<string> => {
  const result: Set<string> = new Set();
  if (s.length < 2) {
    return new Set(s);
  }
  const lastChar = s[s.length - 1];
  const allButLastChar = s.slice(0, s.length - 1);
  const allButLastCharPerms = stringPermutations(allButLastChar);
  allButLastCharPerms.forEach((allButLastCharPerm) => {
    for (let i = 0; i <= allButLastCharPerm.length; i++) {
      const rotatedPerm =
        allButLastCharPerm.slice(0, i) + lastChar + allButLastCharPerm.slice(i);
      result.add(rotatedPerm);
    }
  });
  return result;
};
