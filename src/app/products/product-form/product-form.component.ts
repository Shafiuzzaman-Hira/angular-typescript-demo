import { Component} from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent {

  currencyRestriction = ['Local', 'Global'];
  currencies = ['BDT', 'USD ($)', 'EUR (€)', 'CAD (C$)', 'AUD (A$)'];
}