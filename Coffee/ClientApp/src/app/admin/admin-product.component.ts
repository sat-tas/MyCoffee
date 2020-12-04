import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../models/product';
import { Brand } from '../models/Brand';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  providers: [DataService]
})
export class AdminProductComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  product: Product = new Product();   // изменяемый товар
  products: Product[];                // массив товаров
  tableMode: boolean = true;          // табличный режим
  brands: Brand[];
  constructor(private dataService: DataService) { }
  name: string;
  ngOnInit() {
    this.loadProducts();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  loadProducts() {
    this.dataService.getAllProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        this.dataService.getAllBrands().subscribe((data: Brand[]) => {
          this.brands = data;
          for (var i = 0; i < this.products.length; i++) {
            this.products[i].brand = this.brands[this.products[i].brandId - 1].name;
          }
        })
      });
  }
  // сохранение данных
  save() {
    if (this.product.id == null) {
      this.dataService.createProduct(this.product)
        .subscribe((data: Product) => this.products.push(data));
    } else {
      this.dataService.updateProduct(this.product)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  editProduct(p: Product) {
    this.product = p;
  }
  cancel() {
    this.product = new Product();
    this.tableMode = true;
  }
  delete(p: Product) {
    this.dataService.deleteProduct(p.id)
      .subscribe(data => this.loadProducts());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
