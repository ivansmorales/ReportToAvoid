import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './main_components/reports/reports.component';
import { ReportsAdminComponent } from './main_components/reports-admin/reports-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportsAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
