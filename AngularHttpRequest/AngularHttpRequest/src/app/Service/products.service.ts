import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../model/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  createProduct(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    const headers = new HttpHeaders({ myHeader: 'proAcademy' });
    this.http
      .post<{ name: string }>(
        'https://angularbyme-159b0-default-rtdb.firebaseio.com/products.json',
        products,
        { headers: headers }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchProduct() {
    return this.http
      .get<{ [key: string]: Product }>(
        'https://angularbyme-159b0-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      );
  }

  deleteProduct(id: string) {
    this.http
      .delete(
        'https://angularbyme-159b0-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }

  deleteAllProduct() {
    this.http
      .delete(
        'https://angularbyme-159b0-default-rtdb.firebaseio.com/products.json'
      )
      .subscribe();
  }

  updateProduct(id: string, value: Product) {
    this.http
      .put(
        'https://angularbyme-159b0-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .subscribe(() => {});
  }
}
