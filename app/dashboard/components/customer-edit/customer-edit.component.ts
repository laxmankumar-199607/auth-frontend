import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent {
  id: any;
  edittedData: any;
  name: string;
  age: any;
  location: string;
  customerId: any;

  constructor(
    private activatedroute: ActivatedRoute,
    public customerService: CustomerService,
    public router: Router,
    public loc: Location
  ) {
    activatedroute.params.subscribe((response) => {
      this.id = response['id'];
    });
  }
  ngOnInit() {
    this.customerService.getCustomerById(this.id).subscribe((resp) => {
      this.edittedData = resp;
      this.setCustomer(this.edittedData);
    });

  }
  
  setCustomer(data: Customer): void {
    this.customerId = data?.id;
    this.name = data?.name;
    this.age = data?.age;
    this.location = data?.location;
  }

  updateDetails(): void {
    const customer: Customer = new Customer();
    customer.active = true;
    customer.age = this.age;
    customer.location = this.location;
    customer.name = this.name;
    customer.updatedBy = this.name;
    customer.createdAt = this.edittedData?.createdAt;
    customer.createdBy = this.name
    this.customerService.updateCustomer(customer, this.customerId).subscribe(customer => {
     this.cancelEditDetails()
    });
  }

  cancelEditDetails(): void{
    this.loc.back();
  }
}
