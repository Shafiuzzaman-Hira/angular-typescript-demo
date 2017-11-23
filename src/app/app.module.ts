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

import { searchPipe } from './shared/pipe'
import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/products/products.components';
import { ProductFormComponent } from '../app/products/product-form/product-form.component';
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
