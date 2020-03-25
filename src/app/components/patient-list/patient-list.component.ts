import { Patient } from './../../models/patient/patient.model';
import { PatientService } from './../../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[] = [];
  patients$: Observable<Patient[]>;

  filter = new FormControl('');

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
    } );
  }

  search(text: string): Patient[] {
    return this.patients.filter(p => {
      const term = text.toLowerCase();
      console.log(term);
      return p.firstName.toLowerCase().includes(term)
          || p.middleName.toLowerCase().includes(term)
          || p.lastName.toLowerCase().includes(term)
          || p.email.toLowerCase().includes(term);
    });
  }
}
