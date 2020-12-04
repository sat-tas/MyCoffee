import { Category } from "./Category";

export class Product {
  public id: number;
  public brandId: number;
  public description: string;
  public price: number;
  public image: string;
  public brand: string;
  public categories: Category[];
  constructor() { };
  public init(id: number, brandId: number, description: string, price: number, image: string) {
    this.id = id;
    this.brandId = brandId;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
