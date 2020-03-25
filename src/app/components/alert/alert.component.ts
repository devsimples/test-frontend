import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  alerts: Alert[] = [ ];

  constructor() { }

  success(msg: string) {
    const alert = {type: 'success', message: msg};
    this.alerts.push(alert);
    this.scheduleClose(alert, 4000);
  }

  danger(msg: string) {
    const alert = {type: 'danger', message: msg};
    this.alerts.push(alert);
    this.scheduleClose(alert, 8000);
  }

  scheduleClose(alert: Alert, timeout: number) {
    setTimeout(() => this.close(alert), timeout);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}

