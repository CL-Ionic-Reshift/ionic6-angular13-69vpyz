import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Ionic 6.2 Angular ' + VERSION.major;
  scrollItems: any[];
  segment: string;
  constructor() {
    this.scrollItems = [
      'home',
      'Agenda',
      'Speakers',
      'my schedule',
      'my notes',
      'Attendees',
      'Challenge',
      'Social Wall',
      'Sponsors',
      'exhibitors',
      'Info',
    ];
  }

  ionViewDidEnter() {}
}
