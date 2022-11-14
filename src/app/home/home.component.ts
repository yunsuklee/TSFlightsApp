import { Component, OnInit } from '@angular/core';

/*
  A service is usually used as a gateway to shared data
  within an app.

  Remember to import, add to constructor and method get.
*/
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private flightsService: FlightsService
  ) { }

  ngOnInit(): void {
  }

  getFlights() {

  }

}
