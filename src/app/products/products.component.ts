import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from './products.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
  productName = 'A Book';
  products = [];
  private productsSubscription: Subscription

  constructor(private productsService: ProductsService ) {
    // setTimeout(() => {
    //   this.products = this.productsService.getProducts();
    // }, 3000);
   }
   onAddProduct(form: NgForm) {
      // this.products.push(this.productName);
      console.log(form);
      if(form.valid){
        // this.products.push(form.value.productName);
        this.productsService.addProduct(form.value.productName);

        
      }
   }
   onRemoveProduct(productName: string){
    this.products = this.products.filter(p=> p!== productName)
    console.log("evenhandler", productName );
   }
  ngOnInit() {
    // this.products = this.productsService.getProducts(); 
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts(); 
      })
  }

}
