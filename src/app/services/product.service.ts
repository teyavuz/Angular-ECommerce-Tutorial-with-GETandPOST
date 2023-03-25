import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //http import edildi
import { Product } from 'src/app/product/product'; //product import edildi
import { Observable } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { } //http client tanımlandı


  products!: Product[];
  path = "http://localhost:3000/products";

  getProducts(productID:any):Observable<Product[]>{
    let newpath = this.path;
    if (productID){
      newpath += "?productID="+productID
    }

    
    
    return this.http
    .get<Product[]>(newpath).pipe(
      tap(data=>console.log(JSON.stringify(data)))
    );
  }


  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authoruzation':'Token'
    })
    }
    return this.http.post<Product>(this.path,product, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data)))
    );
  }

}
