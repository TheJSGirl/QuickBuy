import { CanActivateFn } from '@angular/router';
import {SellerService} from './services/seller.service'
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';


// export const AuthGuard: CanActivateFn = (route, state) => {
// console.log(state)
// let res = new SellerService().getSellerLoginStatus()
// console.log('-----', res)
//   return true;
// };

// export class AuthGuard implements CanActivateFn {
//   isLoggedIn: boolean = false;

//   constructor(private sellerService: SellerService) {}

//   ngOnInit(): void {
//     // Subscribe to the login status observable from SellerService
//     this.sellerService.getSellerLoginStatus().subscribe(status => {
//       this.isLoggedIn = status;  // Update the login status whenever it changes
//     });
//   }
// }


  export const AuthGuard: CanActivateFn = () => {
    const authService = inject(SellerService);  // Get the AuthService via Angular's `inject` function
    if (localStorage.getItem('seller')) {
      return true;  // Allow navigation
    } else {
      return authService.isSellerLoggedIn;  // Prevent navigation
    }
  };
