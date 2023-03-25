import { Injectable } from '@angular/core';
import { Category } from 'src/app/category/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class CategoryService {
  

  constructor(private http: HttpClient) {}

  category!:Category[];
  path ="http://localhost:3000/categories"

  getCategories():Observable<Category[]>{
    return this.http
    .get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data)))
    );
  }
}
