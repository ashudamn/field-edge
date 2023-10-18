import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { CustomerInterface } from 'src/app/modelsInterfaces/CustomerInterface.model';
import { UtilityService } from 'src/app/services/utility.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customersResponseData:CustomerInterface[];
  customersData:any[];
  customerHeaders:string[];
  loading: boolean;
  constructor(private customerService:CustomerService,private utilityService:UtilityService,private router:Router) {
    this.customersData=[];
    this.customersResponseData=[];
    this.customerHeaders=[];
    this.loading=true;
   }

  ngOnInit(): void {
    this.customerService.getCustomers().pipe(catchError(error=>{
      this.loading=false;
      return throwError(error);
    })).subscribe(data=>{
      this.loading=false;
      this.customersResponseData=data;
      this.populateRowAndHeaders();
      console.log(data);
    })
  }
  showLoader():boolean{
    return this.loading;
  }
  populateRowAndHeaders(){
    if(this.customersResponseData && this.customersResponseData.length>0){
      this.customersData=this.utilityService.filterHeaders(this.customersResponseData);
      this.customerHeaders=this.utilityService.getHeaders();
    }
  }
  delete(event:any,customer:any){
    console.log("delete",customer);
    this.customerService.deleteCustomer(customer.CustomerId).pipe(catchError(error=>{
      console.log(error);
      return throwError(error);
    })
    ).subscribe(data=>{
      console.log(data);
    });
    
  }
  edit(event:any,customer:any){
    console.log("edit",customer);
    this.router.navigateByUrl(`/edit/${customer.CustomerId}`);
  }
  add(){
    console.log("add");
    this.router.navigateByUrl("/add");
  }
}
