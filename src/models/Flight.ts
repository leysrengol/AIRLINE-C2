import { Passanger } from "./Passanger";
import { Pilot } from "../controllers/Pilot";
import { Router } from "./Route";
import { Seat } from "./Seat";
<<<<<<< HEAD
import { Gate } from "./Gate";
import { Airline } from "./Airline";
import { Airport } from "./Airport";
=======
import { DateTime } from "./DateTime";
>>>>>>> 8e3fd41e25a975d735ffb5cdbf8ba296cce08af1

export class Flight {
  private seats: Seat[] = [];
  private router: Router;
  private passengers: Passanger[];
<<<<<<< HEAD
  private airline: Airline;
  private airport: Airport;
  private gate: Gate;
=======
  private pilot: Pilot;

>>>>>>> 8e3fd41e25a975d735ffb5cdbf8ba296cce08af1

  constructor(
    private flightNumber: string,
    private destination: string,
    private arriveDestination: string,
    private departureTime:DateTime,
    pilots:Pilot,
  ) {
    this.flightNumber = flightNumber;
    this.destination = destination;
    this.arriveDestination = arriveDestination;
    this.departureTime = departureTime;
    this.passengers = [];
    this.pilot = pilots;
  }

  getFlightNumber(): string {
    return this.flightNumber;
  }
  getSeats(): Seat[] {
    return this.seats;
}

  getDestination(): string {
    return this.destination;
  }

  getArriveDestination(): string {
    return this.arriveDestination;
  }

  addPassenger(passenger: Passanger): void {
    this.passengers.push(passenger);
  }

  getReturnTicketPassengerCount(): number {
    let returnTicketPassengerCount = 0;

    for (const passenger of this.passengers) {
      if (passenger.hasReturnTickets()) {
        returnTicketPassengerCount++;
      }
    }

    return returnTicketPassengerCount;
  }
  getdepartureTime(): DateTime{
    return this.departureTime;
  }
  getPilots(): Pilot{
    return this.pilot;
  }

}
