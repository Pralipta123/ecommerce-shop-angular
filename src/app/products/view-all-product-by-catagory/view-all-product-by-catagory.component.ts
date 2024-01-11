import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Catagory } from '../../site-framework/catagory';
@Component({
  selector: 'app-view-all-product-by-catagory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-product-by-catagory.component.html',
  styleUrl: './view-all-product-by-catagory.component.css'
})
export class ViewAllProductByCatagoryComponent implements OnInit{

  searchCatagory:Catagory | undefined;
  productList: Product[] | undefined;
  constructor(private activateRoute:ActivatedRoute,
    private productService: ProductsService){}

  ngOnInit():void {
    this.activateRoute.params.subscribe(data=>{
      console.log(data);
      this.searchCatagory=data['id'];
      this.productService.searchCatagoryProduct(this.searchCatagory).subscribe((catagorydata:Product)=>{
        console.log(catagorydata);
        this.productList=[catagorydata];
      })
    });

    
  }
}
