import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { SellerService } from '../services/seller.service';
import { Router} from '@angular/router';
import { SignUp } from '../data-type';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule, NgIf],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  constructor(private seller:SellerService, private router: Router) {

  }
  showLogin = false
  authError = ''


  ngOnInit():void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp):void {
    this.seller.userSignUp(data)
  }

  openLogin() {
    this.showLogin = true
  }
  openSignup() {
    this.showLogin = false
  }

  login(data: SignUp):void  {
    this.authError = '';
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((err) => {
      if(err){
        this.authError= 'Email or password is not correct'
      }
    })
  }
}
