import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerClass } from 'src/app/modelClasses/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm:FormGroup;
  genderList=[{key:'Male',value:'M'},{key:'Female',value:'F'}];
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService) {
    this.addCustomerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      phoneNumber:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]+")])],
      countryCode:[''],
      gender:['',Validators.required],
      balance:[0]
    });
   }

  ngOnInit(): void {

  }
  onSubmit(){
      console.log(this.addCustomerForm);
      console.log(this.addCustomerForm.value);
      let customer:CustomerClass=new CustomerClass('',this.addCustomerForm.value.firstName,
                                                    this.addCustomerForm.value.lastName,
                                                    this.addCustomerForm.value.email,
                                                    this.addCustomerForm.value.phoneNumber,
                                                    this.addCustomerForm.value.countryCode,
                                                    this.addCustomerForm.value.gender,
                                                    this.addCustomerForm.value.balance);

       this.customerService.postCustomer(customer).subscribe(data=>{
          console.log(data);
       });
  }
}
