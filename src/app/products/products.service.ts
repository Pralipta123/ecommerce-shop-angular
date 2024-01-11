import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import {Catagory} from '../site-framework/catagory'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
getAllProduct():Observable<Product>{
  const productUrl='http://localhost:3000/products';
  return this.httpClient.get<Product>(productUrl);
}

getCatagories():Observable<Catagory[]>{
  const catagoriesUrl = 'http://localhost:3000/catagories';
  return this .httpClient.get<Catagory[]>(catagoriesUrl);
}

  createProduct(productBody: any):Observable<Product>{
   const productUrl = 'http://localhost:3000/products';
  return  this.httpClient.post<Product>(productUrl,productBody);//return an Observable
  }

  viewProduct(productId: any):Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;//return an Observable
   return  this.httpClient.get<Product>(productUrl);
   }

   updateProduct(productBody: any,productId: any):Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;//return an Observable
   return  this.httpClient.put<Product>(productUrl,productBody);
}

deleteProduct(productId: any):Observable<Product>{
  const productUrl = 'http://localhost:3000/product/'+productId;//return an Observable
 return  this.httpClient.delete<Product>(productUrl);
}

searchCatagoryProduct(catagoryId: any):Observable<Product>{
  const productUrl = 'http://localhost:3000/products?catagoryId='+catagoryId;//return an Observable
 return  this.httpClient.get<Product>(productUrl);
}
searchDateProduct(dateParam: string):Observable<Product>{
  const productUrl = 'http://localhost:3000/products/date='+dateParam;//return an Observable
 return  this.httpClient.get<Product>(productUrl);
}

}