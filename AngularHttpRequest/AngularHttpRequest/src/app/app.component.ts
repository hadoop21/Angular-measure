import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { Product } from './model/products';
import { ProductService } from './Service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;
  editMode: boolean = false;
  currentProductId: string;

  @ViewChild('productsForm') form: NgForm;

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: { pName: string; desc: string; price: string }) {
    if (!this.editMode) {
      this.productService.createProduct(products);
    } else {
      this.productService.updateProduct(this.currentProductId, products);
    }
  }

  private fetchProducts() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    });
  }

  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

  onDeleteAllProducts() {
    this.productService.deleteAllProduct();
  }

  onEditClicked(id: string) {
    this.currentProductId = id;
    //get the product based on id
    let currentProduct = this.allProducts.find((p) => {
      return p.id === id;
    });
    // console.log(this.form);

    //populate the form with the product details
    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price,
    });

    //change the button to update product
    this.editMode = true;
  }
}
