import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SellerService } from './services/seller.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'demo';
  constructor(private seller: SellerService){}

}
