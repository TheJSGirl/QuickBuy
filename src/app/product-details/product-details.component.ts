import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productDetail: undefined | productType
  quantity:number = 1
  constructor(private activeRoute:ActivatedRoute, private product: ProductService){}

  ngOnInit(){
    console.log("i m in")
    let productId = this.activeRoute.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((result) => {
      if(result) {
        this.productDetail= result
      }
    })

  }

  handleQuantity(val: string) {
    if(this.quantity > 1 && val === 'min' ) {
      this.quantity-=  1;
    }
    if(this.quantity < 10 && val === 'plus') {
      this.quantity += 1;
    }

  }

}
