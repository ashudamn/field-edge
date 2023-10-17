import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError,pipe, throwError } from 'rxjs';

import { Customer } from 'src/app/modelClasses/create-customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,
              private customerService:CustomerService,
              private router:Router,
              private utilityService:UtilityService) {
    this.addCustomerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      phoneNumber:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]+")])],
      countryCode:['US'],
      gender:['',Validators.required],
      balance:[0],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {

  }
  onSubmit(){
    if(this.addCustomerForm.invalid){
      console.log("form invalid");
      return;
    }
      console.log(this.addCustomerForm);
      console.log(this.addCustomerForm.value);
      let randomWholeNumber=Math.floor(Math.random()*1000+1);
      let customerId=randomWholeNumber.toString();
      let salutation=this.addCustomerForm.value.gender==='M'?'Mr.':'Mrs.';
      let initials=this.addCustomerForm.value.firstName[0]+".";
      let countryCodeAlpha='USA';
      let countryName='United States';
      let primaryLanguageCode="en";
      let primaryLanguage="English";
      let currency="USD";
      let country_rank= randomWholeNumber.toString();
      let country_frequency=(randomWholeNumber+1000).toString();
      let fname_ascii= this.addCustomerForm.value.firstName.toLowerCase();
      let lname_ascii= this.addCustomerForm.value.lastName.toLowerCase();
      let customer:Customer=new Customer(customerId,
                                                      salutation,
                                                      initials,
                                                      this.addCustomerForm.value.firstName,
                                                      fname_ascii,
                                                      this.addCustomerForm.value.gender,
                                                      country_rank,
                                                      country_frequency,
                                                      this.addCustomerForm.value.lastName,
                                                      lname_ascii,
                                                      country_rank,
                                                      country_frequency,
                                                      this.addCustomerForm.value.email,
                                                      this.addCustomerForm.value.password,
                                                      this.addCustomerForm.value.countryCode,
                                                      countryCodeAlpha,
                                                      countryName,
                                                      primaryLanguageCode,
                                                      primaryLanguage,
                                                      this.addCustomerForm.value.balance,
                                                      this.addCustomerForm.value.phoneNumber,
                                                      currency
                                                      );
       this.customerService.postCustomer(customer).pipe(catchError(error=>{
          console.log(error);
          return throwError(error);
       })).subscribe(data=>{
          console.log(data);
       });
  }

  backtoHome(){
    this.router.navigateByUrl("/");
  }
  getGenderList():any[]{
    return this.utilityService.getGenderList();
  }
  getCountriesList(){
    return this.utilityService.getCountriesList();
  }
}
