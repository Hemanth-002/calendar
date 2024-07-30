import { Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  template: '<app-calendar></app-calendar>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
