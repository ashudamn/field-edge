import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomInterceptor } from './interceptors/custom-interceptor.interceptor';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    LoaderComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
