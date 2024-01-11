import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {

  productId=0;
  productDetails:Product | undefined;


  constructor(
    private activatedroute:ActivatedRoute,
    private productservice:ProductsService){}


  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.productId=data['id'];
    });

   this.productservice.viewProduct(this.productId).subscribe(prodcutData=>{
      this.productDetails=prodcutData;
   });
  }

}
