import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core'

import {products } from '../products';

import {categories} from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // products = [...products];
  // categories = [...categories];

  @Input() categoryy = '';
  products = products;
  ngOnInit(): void {
  }

  removeItem(idd:number){
    this.products = this.products.filter((x) => x.id !== idd);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/