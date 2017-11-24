import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap';
import { DataTableModule} from "angular2-datatable";

import { MaterialModule } from './shared/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './/app-routing.module';

import { searchPipe } from './shared/pipe'
import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form/product-form.component';
import { ProductInfoBasicComponent } from '../app/products/product-info/product-info-basic.component';
import { ProductInfoRulesComponent } from '../app/products/product-info/product-info-rules.component';
import { ProductInfoOthersComponent } from '../app/products/product-info/product-info-others.component';

@Pipe({name: 'searchFilter'})

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductInfoBasicComponent, ProductInfoRulesComponent, ProductInfoOthersComponent,
    searchPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule, MatCheckboxModule,
    DataTableModule,
    AlertModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
