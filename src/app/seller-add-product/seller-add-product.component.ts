import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;

  constructor(private product: ProductService){}

  ngOnInit(): void{}

  submit(data: productType) {
    this.addProductMessage = '';
    this.product.addProduct(data)
    this.product.productMsg.subscribe((res) => {
      if(res) {
        this.addProductMessage = "Product is successfully added"
      }
    })

    setTimeout(() => (this.addProductMessage = undefined), 3000);

  }

}
