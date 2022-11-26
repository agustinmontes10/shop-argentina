import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor( 
    private carrito: ProductCartService,
    private productDataService: ProductDataService,
    ) { 
    
  }
  
  ngOnInit(): void {
    this.productDataService.getAll()
    .subscribe(products => this.products = products);
  }

  agregar(product: Product): void {
    if(product.stock > 0) {
      this.carrito.agregar(product);
      product.stock --;
    }
  }

}

