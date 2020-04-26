import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './main_components/reports/reports.component';
import { ReportsAdminComponent } from './main_components/reports-admin/reports-admin.component';
import { LandingPageComponent } from './main_components/landing-page/landing-page.component';
import { HeaderLandingPageComponent } from './main_components/landing-page/components/header-landing-page/header-landing-page.component';
import { InfoLandingPageComponent } from './main_components/landing-page/components/info-landing-page/info-landing-page.component';
import { FooterComponent } from './main_components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportsAdminComponent,
    LandingPageComponent,
    HeaderLandingPageComponent,
    InfoLandingPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
