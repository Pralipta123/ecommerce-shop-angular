import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../products/products.service';
import { Catagory } from '../catagory';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  catagoryList: Catagory[] | undefined  ;
  constructor(private productsService:ProductsService){}
  ngOnInit(): void {
    this.productsService.getCatagories().subscribe(data=>{
      this.catagoryList = data;
    });
    
  }

}
