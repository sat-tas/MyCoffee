import { Product } from "./product";

export class Category {
  public id: number;
  public name: string;
  public products: Product[];
  constructor() { };
  public init(id: number, name: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}
