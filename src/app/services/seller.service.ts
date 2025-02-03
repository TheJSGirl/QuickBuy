import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerLoggedIn = new BehaviorSubject<boolean>(false)
   isLoginError = new EventEmitter(false)

  constructor(private http: HttpClient, private router: Router) {
   }

   getSellerLoginStatus() {
    return this.isSellerLoggedIn.asObservable();
  }

   userSignUp(data: SignUp) {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
     this.http.post('http://localhost:3000/seller', data, {
      observe: 'response'
     }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    })
  }

    reloadSeller() {
      if(localStorage.getItem('seller')) {
        this.isSellerLoggedIn.next(true)
        this.router.navigate(['seller-home'])
      }
    }

    userLogin(data: Login) {
      this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any) => {
        if(result && result.body && result.body.length) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
        }else {
          this.isLoginError.emit(true)
        }
      })
    }
}
