import { Appointment } from './../../models/appointment/appointment.model';
import { AppointmentService } from './../../services/appointment/appointment.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  @ViewChild(AlertComponent)
  alertComponent: AlertComponent;

  formAppointment = new FormGroup({
    localDateTime: new FormControl('2020-03-25T23:07:38.546Z', [Validators.required]),
    type: new FormControl('CONSULTATION', [Validators.required]),
    patientId: new FormControl('marcos', [Validators.required]),
    weight: new FormControl('0', [Validators.required]),
    waistCircumference: new FormControl('0', [Validators.required]),
    glicemia: new FormControl('0', [Validators.required])
  });
  submitted = false;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.clear();
  }

  get f() {
    return this.formAppointment.controls;
  }

  getAppointment(): Appointment {
    const f = this.formAppointment.controls;
    return {
      localDateTime: f.localDateTime.value,
      type: f.type.value,
      patientId: f.patientId.value,
      weight: 0,
      waistCircumference: 0,
      glicemia: 0
    };
  }

  createAppointment() {
    this.submitted = true;

    // if (this.formAppointment.valid) {
    const appointment: Appointment = this.getAppointment();

    this.appointmentService.createAppointment(appointment).subscribe(  () => {
      this.alertComponent.success('Appointment Registered');
      this.clear();
    }, error => {
      this.alertComponent.danger('Error to create appointment');
      console.error(error);
    } );
    // }

  }

  clear() {
    this.submitted = false;
  }

}
