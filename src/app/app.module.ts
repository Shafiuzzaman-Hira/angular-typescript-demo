import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap';
import { DataTableModule} from "angular2-datatable";

import { MaterialModule } from './shared/material.module';
import { searchPipe } from './shared/pipe'

import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form.component';
import { AppRoutingModule } from './/app-routing.module';


@Pipe({name: 'searchFilter'})
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    searchPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTableModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
