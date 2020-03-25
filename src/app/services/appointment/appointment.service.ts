import { Appointment } from './../../models/appointment/appointment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  public getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>( `${environment.apiURL}/appointment`);
  }

  public createAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(`${environment.apiURL}/appointment`, appointment);
  }
}
