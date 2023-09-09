import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:9001'
  rootURL = '/api/customers';

  getAllCustomers() {
    return this.http.get(this.baseUrl + this.rootURL + '/all');
  }

  getCustomerById(id: any) {
    return this.http.get(this.baseUrl + this.rootURL + '/' + id);
  }

  saveCustomer(customer: Customer) {
    return this.http.post(this.baseUrl + this.rootURL, customer)

  }

  updateCustomer(customer: Customer, id: any) {
    return this.http.put(this.baseUrl + this.rootURL + '/update/' + id, customer)

  }

  deleteCustomer(id: any) {
    return this.http.delete(this.baseUrl + this.rootURL + '/delete/' + id)

  }
}
