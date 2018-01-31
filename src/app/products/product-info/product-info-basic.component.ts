import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-info-basic',
  templateUrl: './product-info-basic.component.html',
  styleUrls: ['./product-info-basic.component.css']
})



export class ProductInfoBasicComponent {

  product = {};
  currencyRestriction = ['Local', 'Global'];
  currencies = ['BDT', 'USD ($)', 'EUR (€)', 'CAD (C$)', 'AUD (A$)'];


  @Output() validityChange = new EventEmitter<boolean>();
  @ViewChild('productBasicForm') form: NgForm;
  private validStatus: boolean;

  ngOnInit() {
    if (!this.form) return;
    this.form.valueChanges
      .subscribe(_ => {
        if(this.validStatus !== this.form.valid) {
          this.validStatus = this.form.valid;
          this.validityChange.emit(this.form.valid);
      }});
  }
}