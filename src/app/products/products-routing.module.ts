import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByCatagoryComponent } from './view-all-product-by-catagory/view-all-product-by-catagory.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';

const routes: Routes = [
  {path: ' ', component: ViewAllProductComponent },
  {path:'add-product',component:AddProductComponent},
  {path:'catagory/:id',component:ViewAllProductByCatagoryComponent},
  {path:'search-date',component:ViewAllProductByDateComponent},
  {path:'delete-product/:id',component:DeleteProductComponent},
  {path:'product/:id',component:ViewProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
