import { Component } from '@angular/core';

import { products } from '../products';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  constructor(private http: HttpClient) {
  }

  open(code: String) {
    this.http.get("http://localhost:8080/api/products/" + code, { responseType: 'text' }).subscribe(res => {
      alert(res)
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/