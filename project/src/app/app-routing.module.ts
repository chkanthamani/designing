import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { FormsComponent } from './forms/forms.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
const routes: Routes = [
  {
    path:'page-container',
    component:PageContainerComponent
  },
  {
    path:'forms',
    component:FormsComponent
  },
  // {
  //   path:'multiselect',
  //   component:MultiselectComponent
  // },
  {
    path:'',
    redirectTo:'page-container',
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'multiselect',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
