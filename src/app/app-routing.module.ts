import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form/product-form.component';
import { ProductInfoBasicComponent } from '../app/products/product-info/product-info-basic.component';

const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'productlist', component: ProductsComponent },
  { path: 'productform', component: ProductFormComponent },
  { path: 'productbasicinfo', component: ProductInfoBasicComponent },
  { path: 'productrules', component: ProductInfoBasicComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
