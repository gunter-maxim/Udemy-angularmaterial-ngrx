import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  products = ['A book', 'A tree'];
  
  constructor() {
    // setTimeout(() => {
    //   this.productName = 'A tree';
    // }, 3000);
   }
   onAddProduct() {
      this.products.push(this.productName);
   }
  ngOnInit() {
  }

}
