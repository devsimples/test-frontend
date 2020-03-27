import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { PatientReport } from './../../models/patient-report/PatientReport.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {

  report: PatientReport;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {

  }

  generateReport(patientId): void {
    console.log(patientId);
    this.appointmentService.getReportByPatient(patientId)
      .subscribe(  (data: PatientReport) => {
        this.report = data;
      });
  }
}
