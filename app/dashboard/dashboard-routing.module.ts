import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';


const routes: Routes = [
 
   { path: '', redirectTo: 'customer', pathMatch: 'full' },
{ path: 'customer', component: CustomerDetailsComponent },
{ path: 'customer/edit/:id', component: CustomerEditComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
