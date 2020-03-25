import { PatientService } from './../../services/patient/patient.service';
import { Patient } from './../../models/patient/patient.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  @ViewChild(AlertComponent)
  alertComponent: AlertComponent;

  formPatient = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    middleName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  submitted = false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.clear();
  }

  get f() {
    return this.formPatient.controls;
  }

  getPatient(): Patient {
    const f = this.formPatient.controls;
    return {
      firstName: f.firstName.value,
      middleName: f.middleName.value,
      lastName: f.lastName.value,
      email: f.email.value
    };
  }

  createPatient() {
    this.submitted = true;

    if (this.formPatient.valid) {
      const patient: Patient = this.getPatient();

      this.patientService.createPatient(patient).subscribe(  () => {
        this.alertComponent.success('Patient Registered');
        this.clear();
      }, error => {
        this.alertComponent.danger('Error to create patient');
        console.error(error);
      } );
    }

  }

  clear() {
    this.submitted = false;
  }
}
