import { Injectable } from '@angular/core';
import { CustomerInterface } from '../modelsInterfaces/CustomerInterface.model';
import { CustomerClass } from '../modelClasses/customer.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  headers=['CustomerId','FirstName','LastName','Email','PhoneNumber','CountryCode','Gender','Balance'];

  constructor() { }
  filterHeaders(srcData:CustomerInterface[]):any[]{
    let customersFilteredData: CustomerClass[]=[];
    srcData.forEach((element)=>{
      let tempObject= new CustomerClass(element['id'],element['firstname'],element['lastname'],element['email'],element['phone_Number'],element['country_code'],element['gender'],element['balance']);
  
      customersFilteredData.push(tempObject);
    })
    return customersFilteredData;
  }
  getHeeaders():string[]{
    return this.headers;
  }
}
