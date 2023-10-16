import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerInterface } from '../modelsInterfaces/CustomerInterface.model';
import { Observable } from 'rxjs';
import { CreateCustomer } from '../modelClasses/create-customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  getCustomers(){
    return this.httpClient.get<CustomerInterface[]>(`${environment.api}${environment.getCustomersRoute}`);
  }
  postCustomer(customer:CreateCustomer):Observable<any>{
    const headers={'content-type':'application/json'};
    const jsonString=JSON.stringify(customer);
    return this.httpClient.post(`${environment.api}${environment.postCustomerRoute}`,jsonString,{'headers':headers});
  }
  deleteCustomer(id:string){
    return this.httpClient.delete(`${environment.api}${environment.deleteCustomerRoute}/${id}`);
  }
}
