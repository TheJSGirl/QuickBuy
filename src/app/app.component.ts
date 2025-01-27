import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellerService } from './services/seller.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'demo';
  constructor(private seller: SellerService){}

}
