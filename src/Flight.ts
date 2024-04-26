import { Passanger } from "./Passanger";
import { Router } from "./Route";
import { Seat } from "./Seat";

export class Flight {
  private seats: Seat[] = [];
  private router: Router;
  private passengers: Passanger[];

  constructor(
    private flightNumber: string,
    private destination: string,
    private arriveDestination: string
  ) {
    this.flightNumber = flightNumber;
    this.destination = destination;
    this.arriveDestination = arriveDestination;
    this.passengers = [];
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
}