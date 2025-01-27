import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { productType } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productMsg = new EventEmitter(false)

  constructor(private http: HttpClient) { }
  
  addProduct(data: productType) {
    console.log("hey-----")
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post('http://localhost:3000/products',data, {observe: 'response', headers }).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        if(response) {
          this.productMsg.emit(true);
        }
      },
      (error) => {

        console.error('Error adding product:', error);
      }
    );
  }
}
