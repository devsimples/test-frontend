import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData, CommonModule } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// App and Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
// patient
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
// appointment
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointment-create/appointment-create.component';
import { PatientReportComponent } from './components/patient-report/patient-report.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    PatientCreateComponent,
    PatientListComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    PatientReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
