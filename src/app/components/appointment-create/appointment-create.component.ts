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
    localDateTime: new FormControl('', [Validators.required]),
    type: new FormControl('CONSULTATION', [Validators.required]),
    patientId: new FormControl('', [Validators.required, Validators.minLength(5)]),
    weight: new FormControl('', []),
    waistCircumference: new FormControl('', []),
    glicemia: new FormControl('', [])
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
      weight: f.weight.value,
      waistCircumference: f.waistCircumference.value,
      glicemia: f.glicemia.value
    };
  }

  createAppointment() {
    this.submitted = true;

    if (this.formAppointment.valid) {
      const appointment: Appointment = this.getAppointment();

      this.appointmentService.createAppointment(appointment).subscribe(  () => {
        this.alertComponent.success('Appointment Registered');
        this.clear();
      }, error => {
        this.alertComponent.danger('Error to create appointment');
        console.error(error);
      } );
    }

  }

  clear() {
    this.submitted = false;
  }

}
