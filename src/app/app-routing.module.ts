import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'productlist', component: ProductsComponent },
  { path: 'productform', component: ProductFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
