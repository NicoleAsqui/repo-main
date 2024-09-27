import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'; // Servicio que obtiene los productos de la API

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';
  displayedProducts: any[] = [];
  recordsToShow: number = 5; // Cantidad de registros a mostrar por defecto
  totalRecords: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.updateDisplayedProducts();
    });
  }

  updateDisplayedProducts(): void {
    this.displayedProducts = this.products.slice(0, this.recordsToShow);
    this.totalRecords = this.displayedProducts.length;
  }

  onRecordsToShowChange(value: number): void {
    this.recordsToShow = value;
    this.updateDisplayedProducts();
  }

  searchProducts(): void {
    this.displayedProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    ).slice(0, this.recordsToShow);
    this.totalRecords = this.displayedProducts.length;
  }
}
