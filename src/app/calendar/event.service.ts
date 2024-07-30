import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Event {
  id: string;
  title: string;
  start: string | Date;
  end: string | Date;
  allDay: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [];
  
  constructor() {}

  getEvents(): Observable<Event[]> {
    // Return events as an observable
    return of(this.events);
  }

  addEvent(event: Event): void {
    this.events.push(event);
  }

  deleteEvent(eventId: string): void {
    this.events = this.events.filter((event) => event.id !== eventId);
  }
}
