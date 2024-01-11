import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrdersModule } from "./orders/orders.module";
import { AppModule } from "./app.module";
import { ListOrdersComponent } from "./orders/list-orders/list-orders.component";
import { HeaderComponent } from "./site-framework/header/header.component";
import { SidebarComponent } from "./site-framework/sidebar/sidebar.component";
import { FooterComponent } from "./site-framework/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, OrdersModule, AppModule, ListOrdersComponent, HeaderComponent, SidebarComponent, FooterComponent]
})
export class AppComponent {
  title = 'ecommshop';
}
