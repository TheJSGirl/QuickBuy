import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink , Router} from '@angular/router';
import { ProductService } from '../services/product.service';
import { productType } from '../data-type';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgSwitch, NgSwitchCase, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  menuType: String = 'default';
  sellerName: String = '';
  searchRes : undefined | productType[];

  constructor(private route: Router, private products : ProductService){}

  ngOnInit() : void{
    this.route.events.subscribe((val: any) => {
      console.log(val.url)
      if(val.url) {
        if(localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          if(localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore);
            this.sellerName = sellerData[0].name;
          }
        }else {
          this.menuType = 'default'
        }
      }
    })

  }
  logout() {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }

  searchProducts(query:KeyboardEvent) {
    if(query) {
      const element = query?.target as HTMLInputElement;
      this.products.searchProducts(element.value).subscribe((result) => {
        if(result.length > 5) {
          result.length = 5;
        }
        this.searchRes = result;
      })
    }
  }

  hideSearch() {
    this.searchRes = undefined
  }

  submitSearch(val: string) {
    this.route.navigate([`search/${val}`]);
  }

  redirectToDetails(id: string) {
    this.route.navigate([`/details/${id}`])
  }
}
