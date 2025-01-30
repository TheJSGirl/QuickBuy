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

  showProductList() {
    return this.http.get<productType[]>('http://localhost:3000/products');
  }


  deleteProduct(id: string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);

  }

  getProduct(id: string) {
    return this.http.get<productType>(`http://localhost:3000/products/${id}`);

  }

  updateProduct( productData: productType ) {
    return this.http.put<productType>(`http://localhost:3000/products/${productData.id}`, productData);
  }

  getDemandedProducts(){
    return this.http.get<productType[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() {
    return this.http.get<productType[]>('http://localhost:3000/products?_limit=8');

  }
}
