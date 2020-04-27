import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports del componente Reports
import { HeaderComponent } from './main_components/reports/header/header.component';
import { CrearReportesComponent } from './main_components/reports/crear-reportes/crear-reportes.component';
import { ReportesComponent } from './main_components/reports/reportes/reportes.component';
import { HistorialComponent } from './main_components/reports/historial/historial.component';
import { ValoradoComponent } from './main_components/reports/valorado/valorado.component';

//Imports del componente LandingPage
import { LandingPageComponent } from './main_components/landing-page/landing-page.component';
import { HeaderLandingPageComponent } from './main_components/landing-page/components/header-landing-page/header-landing-page.component';
import { InfoLandingPageComponent } from './main_components/landing-page/components/info-landing-page/info-landing-page.component';

//Imports de main-components
import { FooterComponent } from './main_components/footer/footer.component';

//Imports del componente LogIn de User
import {LogInUserComponent} from './userModule/log-in-user/log-in-user.component';
import {FormularioLogInComponent} from './userModule/log-in-user/components/formulario-log-in/formulario-log-in.component';
import { HeaderRegisterLogInUserComponent } from './main_components/header-register-log-in-user/header-register-log-in-user.component';

//Imports del componente Register de User
import {FormRegisteruserComponent} from './userModule/register-user/components/form-registeruser/form-registeruser.component';
import{RegisterUserComponent} from './userModule/register-user/register-user.component' 

//Imports del componente Login de Admin
import{LoginAdminComponent} from './adminModule/login-admin/login-admin.component'
import{FormLoginComponent} from './adminModule/login-admin/components/form-login/form-login.component'
import{HeaderAdminComponent} from './adminModule/login-admin/components/header-admin/header-admin.component'

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
