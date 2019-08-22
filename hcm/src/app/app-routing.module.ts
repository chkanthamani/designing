import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffboardingComponent } from './offboarding/offboarding.component';
const routes: Routes = [
  {path:'offboarding',component:OffboardingComponent},
  {
    path:'',
    redirectTo:'offboarding',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
