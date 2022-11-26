import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private products: Product[] = [];
  
  list: BehaviorSubject<Product[]> = new BehaviorSubject(this.products);

  agregar(product: Product ) {
    let p = this.products.find(p => p.name === product.name);

    if(p) {
      p.quantity++;
    } else {
      this.products.push({...product});
    }
      

    this.list.next(this.products); 
  }

  constructor() { }
}
