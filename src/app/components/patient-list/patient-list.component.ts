import { Patient } from './../../models/patient/patient.model';
import { PatientService } from './../../services/patient/patient.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
  patients$: Observable<Patient[]>;

  filter = new FormControl('');

  @ViewChild(AlertComponent)
  alertComponent: AlertComponent;

  constructor(private service: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.service.getPatients().subscribe(  (data: Patient[]) => {

      console.log(`Patients loaded. count=${this.patients.length}`);

      this.patients = data;
      this.patients$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      );

    }, error => {
      console.error(error);
      this.alertComponent.danger('Error to load patients');
    } );
  }

  search(text: string): Patient[] {
    return this.patients.filter(p => {
      const term = text.toLowerCase();

      const includes = (s: string) => (s != null && s.toLowerCase().includes(term));

      return includes(p.firstName) || includes(p.middleName) || includes(p.lastName) || includes(p.email);
    });
  }
}
