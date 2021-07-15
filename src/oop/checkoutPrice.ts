/**
 * calculate the checkout price of a customers order
 * item and quantity will be input as an array [itemName: string , quantity: number]
 * should return the total cost of the order
 */

class Product {
  name: string;
  price: number;
  discount: ((quantity: number) => number) | null;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.discount = null;
  }

  setDiscount(discount: (price: number, quantity: number) => number) {
    this.discount = (quantity: number) => discount(this.price, quantity);
  }

  getCost(quantity: number): number {
    if (this.discount === null) {
      return quantity * this.price;
    }
    return this.discount(quantity);
  }
}

const grapes = new Product("grapes", 5);
const apples = new Product("apples", 3);
const peaches = new Product("peaches", 7);
const products: { [key: string]: Product } = { grapes, apples, peaches };

grapes.setDiscount((price: number, quantity: number) => {
  let grapesCost = 0;
  let grapesQuantity = quantity;
  if (grapesQuantity % 2 === 1) {
    grapesCost += price;
    grapesQuantity -= 1;
  }
  grapesCost += grapesQuantity * price * 0.5;
  return grapesCost;
});

apples.setDiscount((price: number, quantity: number) => {
  if (quantity >= 2) {
    const discountPrice = price * quantity * 0.8;
    return discountPrice;
  }
  return price * quantity;
});

const checkoutPrice = (items: [name: string, quantity: number][]) => {
  let totalCost = 0;
  items.forEach((item) => {
    const name = item[0];
    const quantity = item[1];
    if (products.hasOwnProperty(name)) {
      totalCost += products[name].getCost(quantity);
    } else {
      throw new Error(
        "product missing from database. please remove from cart."
      );
    }
  });
  return totalCost;
};

export default checkoutPrice;
