import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';
import {  CommonModule, NgForOf } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-seller-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './seller-product-list.component.html',
  styleUrl: './seller-product-list.component.css',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class SellerProductListComponent {
  productList: productType[] = []; 
  deleteMsg = '' ;
  faCoffee= faCoffee ;

  constructor(private sellerProductList: ProductService){}

  ngOnInit():void {
    this.sellerProductList.showProductList().subscribe((res) => {
      this.productList = res;
    });

  }

  handleProductDelete(id: string) {
    console.log(id)
    this.sellerProductList.deleteProduct(id).subscribe((res) => {
      console.log(res)
      if(res) {
        this.deleteMsg = 'Product is deleted'
      }
    })
    setTimeout(() => {
      this.deleteMsg = ''
    }, 3000)
    this.sellerProductList.showProductList().subscribe((res) => {
      this.productList = res;
    });
  }

 
}
