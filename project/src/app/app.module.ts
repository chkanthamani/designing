import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MultiselectComponent } from './multiselect/multiselect.component';
@NgModule({
  declarations: [
    AppComponent,   
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    PageContainerComponent,
    FormsComponent,
    MultiselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
