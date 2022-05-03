import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component'; 
import { HomeComponent } from './home/home.component'; 
import { McodingComponent } from './mcoding/mcoding.component';

const routes: Routes = [
{ path: 'coding', component: McodingComponent },
{ path:'', component:HomeComponent },
{ path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],  
})
export class AppRoutingModule { }
