import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{
  productId: any;
  constructor(private activateRoute:ActivatedRoute){}


  ngOnInit(): void {
   this.activateRoute.params.subscribe(data=>{
this.productId=data['id'];
   })
  }
}
