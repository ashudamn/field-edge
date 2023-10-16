import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { CustomerInterface } from 'src/app/modelsInterfaces/CustomerInterface.model';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customersResponseData:CustomerInterface[];
  customersData:any[];
  customerHeaders:string[];
  constructor(private customerService:CustomerService,private utilityService:UtilityService,private router:Router) {
    this.customersData=[];
    this.customersResponseData=[];
    this.customerHeaders=[];
   }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data=>{
      this.customersResponseData=data;
      this.populateRowAndHeaders();
      console.log(data);
    })
  }
  populateRowAndHeaders(){
    if(this.customersResponseData && this.customersResponseData.length>0){
      this.customersData=this.utilityService.filterHeaders(this.customersResponseData);
      this.customerHeaders=this.utilityService.getHeeaders();
    }
  }
  delete(event:any,customer:any){
    console.log("delete",customer);
  }
  edit(event:any,customer:any){
    console.log("edit",customer);
  }
  add(){
    console.log("add");
    this.router.navigateByUrl("/add");
  }
}
