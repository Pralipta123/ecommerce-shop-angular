import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductByCatagoryComponent } from './view-all-product-by-catagory/view-all-product-by-catagory.component';

@NgModule({
  declarations: [
    ProductsComponent,
 
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductByDateComponent,
    ViewAllProductByCatagoryComponent
   
  ]
})
export class ProductsModule { }
