import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerDetailsComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
