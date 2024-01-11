import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productId: any;
  constructor(private activateRoute:ActivatedRoute){}


  ngOnInit(): void {
   this.activateRoute.params.subscribe(data=>{
this.productId=data['id'];
   })
  }
}
