import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main_components/reports/header/header.component';
import { CrearReportesComponent } from './main_components/reports/crear-reportes/crear-reportes.component';
import { ReportesComponent } from './main_components/reports/reportes/reportes.component';
import { HistorialComponent } from './main_components/reports/historial/historial.component';
import { ValoradoComponent } from './main_components/reports/valorado/valorado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrearReportesComponent,
    ReportesComponent,
    HistorialComponent,
    ValoradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
