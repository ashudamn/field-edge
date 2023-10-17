import { Injectable } from '@angular/core';
import { CustomerInterface } from '../modelsInterfaces/CustomerInterface.model';
import { CustomerClass } from '../modelClasses/customer.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private headers=['CustomerId','FirstName','LastName','Email','PhoneNumber','CountryCode','Gender','Balance'];
  private currency=['USD','CAD','INR'];
  private countriesInfo=[{code:'US',codeAlpha:'USA',name:'Unites States',teleCode:"+1"},
                         {code:'CA',codeAlpha:'CAN',name:'Canada',teleCode:"+1"},
                         {code:'IN',codeAlpha:'IND',name:'India',teleaCode:"+91"}];
  private genderList=[{key:'Male',value:'M'},{key:'Female',value:'F'}];
  constructor() { }
  filterHeaders(srcData:CustomerInterface[]):CustomerClass[]{
    let customersFilteredData: CustomerClass[]=[];
    srcData.forEach((element)=>{
      let tempObject= new CustomerClass(element['id'],element['firstname'],element['lastname'],element['email'],element['phone_Number'],element['country_code'],element['gender'],element['balance']);
  
      customersFilteredData.push(tempObject);
    })
    return customersFilteredData;
  }
  getHeaders():string[]{
    return this.headers;
  }
  getGenderList():any[]{
    return this.genderList;
  }
  getCountriesList():any[]{
    return this.countriesInfo;
  }
}
