const memoMakeChange = (amount: number, coins: number[]): number[][] => {
  const memo: { [amount: number]: number[][] } = {};
  const makeChange = (amount: number, coins: number[]): number[][] => {
    if (memo.hasOwnProperty(amount)) {
      return memo[amount];
    }
    const changeSets: string[] = [];
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (amount / coin > 0) {
        if (amount === coin) {
          changeSets.push([coin].join(""));
        }
        const coinChangeSets: number[][] = [];
        if (amount - coin > 0) {
          coinChangeSets.push(
            ...makeChange(amount - coin, coins).map((coinSubset) => [
              ...coinSubset,
              coin,
            ])
          );
          const correctSumChangeSets = coinChangeSets
            .filter(
              (changeSet) =>
                amount === changeSet.reduce((coin, sum) => coin + sum)
            )
            .map((changeSet) => changeSet.sort().join(""));
          if (correctSumChangeSets.length > 0) {
            changeSets.push(
              ...correctSumChangeSets.filter(
                (changeSet) => !changeSets.includes(changeSet)
              )
            );
          }
        }
      }
    }
    const result = changeSets.map((changeSet) =>
      changeSet.split("").map((coin) => parseInt(coin))
    );
    memo[amount] = result;
    return result;
  };
  return makeChange(amount, coins);
};
export default memoMakeChange;
