import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { OffBoardingComponent } from './off-boarding/off-boarding.component';
import { ExitprocessComponent } from './exitprocess/exitprocess.component';
import { Pageheader1Component } from './pageheader1/pageheader1.component';
const routes: Routes = [
  {path:'page-container',component:PageContainerComponent},
  {path:'',redirectTo:'page-container',pathMatch:'full'},
  {
    path:'off-boarding',  
    component: OffBoardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
