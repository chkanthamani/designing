import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageHeader1Component } from './page-header1/page-header1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    SidebarComponent,
    PageHeaderComponent,
    PageContentComponent,
    PageHeader1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
