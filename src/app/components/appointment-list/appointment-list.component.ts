import { Appointment } from './../../models/appointment/appointment.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  @ViewChild(AlertComponent)
  alertComponent: AlertComponent;

  appointments: Appointment[] = [];

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.service.getAppointments().subscribe(  (data: Appointment[]) => {
      console.log(`Appointments loaded. count=${data.length}`);
      this.appointments = data;

    }, error => {
      this.alertComponent.danger('Error to load appointments');
      console.error(error);
    } );
  }
}
