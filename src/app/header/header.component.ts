import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  menuType: String = 'default';
  sellerName: String = '';

  constructor(private route: Router){}

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
}
