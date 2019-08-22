import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
const routes: Routes = [
  {path:'page-container',component:PageContainerComponent},
  {path:'',redirectTo:'page-container',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
