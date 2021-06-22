export const getMaxProfit = (stockPrices: number[]) => {
  if (stockPrices.length < 2)
    throw new Error(
      "Unable to buy and sell with less than 2 stock stockPrices[i]s."
    );
  let bestProfit = stockPrices[1] - stockPrices[0];
  let minPrice = stockPrices[0];
  for (let i = 1; i < stockPrices.length; i++) {
    bestProfit =
      stockPrices[i] - minPrice > bestProfit
        ? stockPrices[i] - minPrice
        : bestProfit;
    minPrice = stockPrices[i] < minPrice ? stockPrices[i] : minPrice;
  }
  return bestProfit;
};
