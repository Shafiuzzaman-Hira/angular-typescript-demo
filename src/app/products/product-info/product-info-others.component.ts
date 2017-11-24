import { Component} from '@angular/core';

@Component({
  selector: 'product-info-others',
  templateUrl: './product-info-others.component.html'
})



export class ProductInfoOthersComponent {
  snd = [
    { id: 1, prefix: 'ABC', },
    { id: 2, prefix: 'NCB', },
    { id: 3, prefix: 'ASN', },
    { id: 4, prefix: 'AED', },
  ];

  gl = [
    { id: 1, type: 'Product Gl', code:'90999', desc:'Mudaraba Savings Deposit'},
    { id: 2, type: 'Excise Duty', code:'11123', desc:'Excise Duty'},
    { id: 3, type: 'Profit Paid GL', code:'78956', desc:'Profit Paid on Mudaraba Savings'},,
    { id: 4, type: 'ABC', code:'12345', desc:'Profit Paid on Mudaraba Savings'},,
  ];
}