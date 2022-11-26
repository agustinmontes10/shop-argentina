import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://61f730b32e1d7e0017fd701e.mockapi.io/cursos';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor( private http: HttpClient ) { }

  public getAll(): Observable<Product[]> {
     return this.http.get<Product[]>(URL)
  }

}
