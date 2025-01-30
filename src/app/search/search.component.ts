import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchResult: undefined | productType[];
  showEmptyMsg = ''

  constructor(private activeRoute:ActivatedRoute, private products: ProductService){}

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');

    query && this.products.searchProducts(query).subscribe((result) => {
      if(result) {
        this.searchResult = result;
        console.log('---', result)
      }else {
        this.showEmptyMsg = 'No result found'
      }

    })

  }


}
