import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<any>;

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

}
