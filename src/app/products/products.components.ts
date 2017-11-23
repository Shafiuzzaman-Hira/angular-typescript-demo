import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Product } from './shared/product.model'
import { PRODUCTS } from './shared/mock-products';
import { searchPipe } from '../shared/pipe'
import * as _ from 'lodash';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

  private sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public removeItem(item: any) {
    this.products = _.filter(this.products, (elem) => elem != item);
    console.log("Remove: ", item.email);
  } 
}