import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './main_components/reports/reports.component';
import { ReportsAdminComponent } from './main_components/reports-admin/reports-admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderLandingPageComponent } from './header-landing-page/header-landing-page.component';
import { InfoLandingPageComponent } from './info-landing-page/info-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportsAdminComponent,
    LandingPageComponent,
    HeaderLandingPageComponent,
    InfoLandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
