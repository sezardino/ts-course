// Cart for website,
// have products list (Product) what was added to cart
// and delivery parameters. Add methods for Cart:
// addProduct(product) - add product to cart
// deleteProduct(id) - delete product from cart (by id)
// totalPrice() - calculate total price of products in cart
// chooseDelivery
// - Checkout - if delivery parameters are correct, and products in cart return ok
// Product: id, name и price
// Delivery: to post (date, address), in shop (date = today, showId)
enum DeliveryMethod {
  Post = "post",
  Shop = "shop",
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface IDelivery {
  method: DeliveryMethod;
  date: Date;
  location: string;
}

interface ICart {
  products: Product[];
  addProduct(product: Product): void;
  deleteProduct(id: number): void;
  getTotalPrice(): number;
  checkout(): boolean;
  setDeliveryMethod(method: DeliveryMethod, date: Date, location: string): void;
}

class Cart implements ICart {
  private _products: Product[] = [];
  private delivery: IDelivery;

  get products(): Product[] {
    return this._products;
  }

  addProduct(product: Product): void {
    this._products.push(product);
  }

  deleteProduct(id: number): void {
    this._products.filter((product) => product.id !== id);
  }

  getTotalPrice(): number {
    return this._products.reduce((acc, product) => acc + product.price, 0);
  }

  checkout(): boolean {
    if (this.products.length === 0 || !this.delivery) {
      return false;
    }

    return true;
  }

  setDeliveryMethod(
    method: DeliveryMethod,
    date: Date,
    location: string
  ): void {
    this.delivery = {
      method,
      date,
      location,
    };
  }
}
