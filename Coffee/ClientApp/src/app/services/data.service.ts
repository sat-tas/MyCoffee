import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Brand } from '../models/Brand';

@Injectable()
export class DataService {

  private urlProduct = "/api/product/";
  private urlBrand = "/api/brand/"
  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.urlProduct + 'GetAllProduct');
  }

  getProduct(id: number) {
    return this.http.get(this.urlProduct + 'GetProductById/' + id);
  }

  createProduct(product: Product) {
    return this.http.post(this.urlProduct + 'AddProduct', product);
  }
  updateProduct(product: Product) {

    return this.http.put(this.urlProduct + 'UpdateProduct', product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.urlProduct + 'DeleteProduct/' + id);
  }

  getAllBrands() {
    return this.http.get(this.urlBrand + 'GetAllBrands');
  }

  getBrand(id: number) {
    return this.http.get(this.urlBrand + 'GetBrandById/' + id);
  }

  createBrand(brand: Brand) {
    return this.http.post(this.urlBrand + 'AddBrand', brand);
  }
  updateBrand(brand: Brand) {

    return this.http.put(this.urlBrand + 'UpdateBrand', brand);
  }
  deleteBrand(id: number) {
    return this.http.delete(this.urlBrand + 'DeleteBrand/' + id);
  }


}
