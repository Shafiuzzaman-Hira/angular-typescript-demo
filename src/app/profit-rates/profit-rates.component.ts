import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { ProfitRate } from './profit-rate.model'
import { PROFIT_RATE } from './mock-profit-rate';
import { searchPipe } from '../shared/pipe'
import * as _ from 'lodash';


@Component({
  selector: 'profit-rate',
  templateUrl: './profit-rates.component.html'
})



export class ProfitRatesComponent implements OnInit {

  profitRates = PROFIT_RATE;
  
  constructor() { }

  ngOnInit() {
  }

  private sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public removeItem(item: any) {
    this.profitRates = _.filter(this.profitRates, (elem) => elem != item);
    console.log("Remove: ", item.email);
  } 
}