import { Component, ViewChild } from '@angular/core';
import { ProductInfoBasicComponent } from '../product-info/product-info-basic.component'

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent {

  currencyRestriction = ['Local', 'Global'];
  currencies = ['BDT', 'USD ($)', 'EUR (€)', 'CAD (C$)', 'AUD (A$)'];

  private activeTab : number = 1;
  private childFormValid: boolean;

}