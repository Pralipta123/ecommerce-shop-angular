import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ProductsModule } from './products/products.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,AppComponent,OrdersModule,
    RouterModule,SiteFrameworkModule,
    ProductsRoutingModule,ProductsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap:[],
  exports:[]
})
export class AppModule { }
