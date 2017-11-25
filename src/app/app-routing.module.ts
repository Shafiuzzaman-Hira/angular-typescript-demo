import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form/product-form.component';
import { ProfitRatesComponent} from '../app/profit-rates/profit-rates.component';
import { ProfitRateCreate } from '../app/profit-rates/profit-rates-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'productlist', component: ProductsComponent },
  { path: 'productform', component: ProductFormComponent },
  { path: 'profitrates', component: ProfitRatesComponent },
  { path: 'createrate', component: ProfitRateCreate },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
