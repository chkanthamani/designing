import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnimationsComponent } from './animations/animations.component';
import { ScreenComponent } from './screen/screen.component';
import {  DragDropModule } from '@angular/cdk/drag-drop';
import { MyDatePickerModule } from 'mydatepicker';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { CartService } from './cart.service';
import { ScreenService } from './screen.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardDesignComponent } from './dashboard-design/dashboard-design.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    ScreenComponent,
    ProductDetailsComponent,
    ProductDataComponent,
    DashboardDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    DragDropModule,
    MyDatePickerModule,
    HttpClientModule
  ],
  providers: [CartService,ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
