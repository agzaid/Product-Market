import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ProductsModule { }
