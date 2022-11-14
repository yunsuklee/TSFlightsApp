import { Component, OnInit } from '@angular/core';

/*
  A service is usually used as a gateway to shared data
  within an app.

  Remember to import, add to constructor and method get.
*/
import { FlightsService } from '../flights.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];

  constructor(
    private flightsService: FlightsService
  ) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }
}
