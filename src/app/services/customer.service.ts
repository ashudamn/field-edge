import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerInterface } from '../modelsInterfaces/CustomerInterface.model';
import { CustomerClass } from '../modelClasses/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  getCustomers(){
    return this.httpClient.get<CustomerInterface[]>(`${environment.api}${environment.getCustomersRoute}`);
  }
  postCustomer(customer:CustomerClass):Observable<any>{
    const headers={'content-type':'application/json'};
    const jsonString=JSON.stringify(customer);
    return this.httpClient.post(`${environment.api}${environment.postCustomerRoute}`,jsonString,{'headers':headers});
  }
}
