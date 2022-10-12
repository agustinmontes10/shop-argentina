import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: 'ipa',
      type: 'IPA',
      price: 400,
      stock: 10,
      image: 'Aca va la url',
      clearance: false,
    },
    {
      name: 'honey',
      type: 'Honey',
      price: 400,
      stock: 10,
      image: 'Aca va la url',
      clearance: true,
    },
    {
      name: 'apa',
      type: 'APA',
      price: 400,
      stock: 0,
      image: 'Aca va la url',
      clearance: false,
    }
  ]
 
  constructor() { }
  
  ngOnInit(): void {
  }

}
