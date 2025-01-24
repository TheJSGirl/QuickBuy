import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) {
   }
   userSignUp(data: SignUp) {
    console.log("----service call", data)
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/seller', data, {headers})
  }
}
