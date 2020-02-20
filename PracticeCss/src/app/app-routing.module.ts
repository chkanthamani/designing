import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { DashboardDesignComponent } from './dashboard-design/dashboard-design.component';
const routes: Routes = [
  // { path: '', component: ProductDataComponent },
  { path: 'dashboard-design', component:  DashboardDesignComponent}
  // { path: 'products/:Id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
