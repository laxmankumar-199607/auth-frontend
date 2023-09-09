import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  customerList: any = [];
  name: string;
  age: any;
  location: string;

  buttonLabel: string = 'Save';
  customerId: any;
  constructor(public customerService: CustomerService,
   
    ) {

  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customerList = data;
    });

  }

  saveCustomer(): void {
    const customer: Customer = new Customer();
    customer.active = true;
    customer.age = this.age;
    customer.location = this.location;
    customer.name = this.name;
    customer.createdBy = this.name;
    if (this.buttonLabel === 'Save') {
      this.customerService.saveCustomer(customer).subscribe(customer => this.customerList.push(customer));
    } else {
      this.customerService.updateCustomer(customer, this.customerId).subscribe(customer => {
      
        let c: any;
        c = customer;
        this.customerList.forEach((e: any, index: any) => {
          if (e.id == c['id']) {
            this.customerList[index] = c;
          }
        })
      });
    }

  }

  onEdit(row: Customer): void {

    this.buttonLabel = 'Update';
    this.customerId = row?.id;
    this.name = row?.name;
    this.age = row?.age;
    this.location = row?.location;

  }

  deleteRow(c: Customer): void {

    // angular.module('MyApp')
    // .controller('MyController', function($scope, $confirm) {
    //   $scope.delete = function() {
    //     $confirm({text: 'Are you sure you want to delete?', title: 'Delete it', ok: 'Yes', cancel: 'No'})
    //       .then(function() {
    //         // send delete request...
    //       });
    //   };
    // });
    this.customerService.deleteCustomer(c?.id).subscribe(customer =>{
      let c: any;
      c = customer;
      this.customerList.forEach((e: any, index: any) => {
        if (e.id == c['id']) {
          this.customerList.splice(index, 1);
        }
      });
    })
  }

  clearModal(): void {
    this.name = '';
    this.age = '';
    this.location = '';
    this.buttonLabel = 'Save';


  }

}
