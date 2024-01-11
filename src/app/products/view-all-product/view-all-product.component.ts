import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-all-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit{

 productList: Product[] | undefined;
constructor(private productService:ProductsService){}
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product) =>{
     this.productList=[data];
     
       
    },
    (error: any) => {
      // Handle HTTP error
      console.error('HTTP error:', error);
    });
  }

}
