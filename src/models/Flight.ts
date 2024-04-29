import { Passanger } from "./Passanger";
import { Pilot } from "../controllers/Pilot";
import { Router } from "./Route";
import { Seat } from "./Seat";
import { DateTime } from "./DateTime";

export class Flight {
  private seats: Seat[] = [];
  private router: Router;
  private passengers: Passanger[];
  private pilot: Pilot;


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