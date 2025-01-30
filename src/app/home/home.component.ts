import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts: undefined | productType[];
  trendyProducts: undefined | productType[];

  constructor(private products: ProductService){}
  ngOnInit(): void {
    this.products.getDemandedProducts().subscribe((data) => {
      if(data){
        this.popularProducts= data
      }
    })
    this.products.trendyProducts().subscribe((data) => {
      if(data){
        this.trendyProducts= data
      }
    })
  }
}
