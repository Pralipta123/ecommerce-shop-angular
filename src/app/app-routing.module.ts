import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';

const routes:Routes=[
 //{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
//{path:'order',component:ListOrdersComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
