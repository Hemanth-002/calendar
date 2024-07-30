import { Routes } from '@angular/router';

// Define your lazy-loaded routes here
export const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.component').then((m) => m.CalendarComponent),
  },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: '**', redirectTo: '/calendar' },
];
