import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"add",component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
