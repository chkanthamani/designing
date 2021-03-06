import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ExitprocessComponent } from './exitprocess/exitprocess.component';
import { OffBoardingComponent } from './off-boarding/off-boarding.component';
import { FooterComponent } from './footer/footer.component';
import { Pageheader1Component } from './pageheader1/pageheader1.component';
import { MyDatePickerModule } from 'mydatepicker';
import { TimeAttendanceComponent } from './time-attendance/time-attendance.component';
import { ShiftsComponent } from './shifts/shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PageContainerComponent,
    PageHeaderComponent,
    PageContentComponent,
    ExitprocessComponent,
    OffBoardingComponent,
    FooterComponent,
    Pageheader1Component,
    TimeAttendanceComponent,
    ShiftsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DatePickerModule,
    MyDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
