import { Component, OnInit } from '@angular/core';
import {Product } from '../../domain/products';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: Product[];
  constructor() {
    this.data = [{code : 'P1000' , nom : 'cafe' , prixunitaire : 1500},
                {code : 'P2000' , nom : 'the' , prixunitaire : 1000},
                {code : 'P3000' , nom : 'coca-cola' , prixunitaire : 2000}];
   }

  ngOnInit() {
  }

}
