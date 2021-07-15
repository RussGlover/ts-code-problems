import checkoutPrice from "./checkoutPrice";

describe(`given an array of products and their quantity,
return a number representing checkout price`, () => {
  it("should calculate checkout price", () => {
    const products: [name: string, quantity: number][] = [
      ["apples", 5],
      ["peaches", 3],
      ["grapes", 3],
    ];
    expect(checkoutPrice(products)).toBe(43);
  });
  it("should throw an error if product does not exist", () => {
    const products: [name: string, quantity: number][] = [
      ["apples", 5],
      ["peaches", 3],
      ["grapes", 3],
      ["oranges", 5],
    ];
    expect(() => checkoutPrice(products)).toThrowError();
  });
});
