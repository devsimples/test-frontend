import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentCreateComponent } from './components/appointment-create/appointment-create.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'patient-create', component: PatientCreateComponent},
  {path: 'patients-list', component: PatientListComponent},
  {path: 'appointment-create', component: AppointmentCreateComponent},
  {path: 'appointments-list', component: AppointmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
