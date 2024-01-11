import { Routes } from "@angular/router"
import { ListOrdersComponent } from "./orders/list-orders/list-orders.component"
import { HttpClientModule } from "@angular/common/http"
 export const routes:Routes=[
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 {path:'orders',component:ListOrdersComponent}
 ]