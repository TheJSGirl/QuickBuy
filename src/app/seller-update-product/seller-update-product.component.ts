import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  imports: [FormsModule],
  templateUrl: './seller-update-product.component.html',
  styleUrl: './seller-update-product.component.css'
})
export class SellerUpdateProductComponent {

  productData: undefined | productType;
  updateMsg= ''

  constructor(private route : ActivatedRoute, private productService: ProductService, private routeing: Router){}
  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id') ;
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((data ) => {
      this.productData = data
    })

  }
  submit(val:productType) {

    if(this.productData) {
      val.id = this.productData.id
    }
    
    this.productService.updateProduct(val).subscribe((res) => {
      if(res) {
        this.updateMsg = 'Updated Successfully'
      }
    })

    setTimeout(() => {
      this.routeing.navigate(['seller-product-list']);
      this.updateMsg = '';

    }, 3000)

    
  }

}
