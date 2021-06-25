/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 * The input arrayOfInts will always have at least three integers.
 */
const highestProduct = (
    arrayOfInts: number[],
    productCount: number = 3
): number => {
    if (arrayOfInts.length < productCount) {
        throw new Error(
            `Expected arrayOfInts to have length of ${productCount} or more.`
        );
    }
    const biggestNegativeInts = new Array(productCount).fill(0);
    const biggestPositiveInts = new Array(productCount).fill(0);

    arrayOfInts.forEach((number) => {
        for (let i = 0; i < productCount; i++) {
            if (number > biggestPositiveInts[i]) {
                biggestPositiveInts[i] = number;
                break;
            }
            if (number < 0 && number < biggestNegativeInts[i]) {
                biggestNegativeInts[i] = number;
                break;
            }
        }
    });
    const biggestProductInts = [...biggestPositiveInts];
    let negativeIntInsertIndex = biggestProductInts.length - 2;
    for (let i = 0; i < biggestNegativeInts.length - 1; i++) {
        if (biggestNegativeInts[i] === 0) {
            break;
        }
        if (
            biggestNegativeInts
                .slice(i, i + 2)
                .reduce((result, num) => result * num) >
            biggestProductInts
                .slice(negativeIntInsertIndex, negativeIntInsertIndex + 2)
                .reduce((result, num) => result * num)
        ) {
            biggestProductInts[negativeIntInsertIndex] = biggestNegativeInts[i];
            biggestProductInts[negativeIntInsertIndex + 1] =
                biggestNegativeInts[i + 1];
            negativeIntInsertIndex -= 2;
            if (negativeIntInsertIndex < 0) {
                break;
            }
        }
    }
    return biggestProductInts.reduce((result, num) => result * num);
};

export default highestProduct;
