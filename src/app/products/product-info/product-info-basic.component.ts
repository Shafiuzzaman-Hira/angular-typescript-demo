import { Component} from '@angular/core';

@Component({
  selector: 'product-info-basic',
  templateUrl: './product-info-basic.component.html',
  styleUrls: ['./product-info-basic.component.css']
})



export class ProductInfoBasicComponent {
  currencyRestriction = ['Local', 'Global'];
  currencies = ['BDT', 'USD ($)', 'EUR (€)', 'CAD (C$)', 'AUD (A$)'];
}