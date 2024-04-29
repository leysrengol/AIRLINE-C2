import { Passanger } from "./Passanger";
import { Pilot } from "../controllers/Pilot";
import { Router } from "./Route";
import { Seat } from "./Seat";
import { Gate } from "./Gate";
import { Airline } from "./Airline";

export class Flight {
  private seats: Seat[] = [];
  private router: Router;
  private passengers: Passanger[];
  private airline: Airline;
  private gate: Gate;

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


  getGateNumberForFlight(): string | undefined {
    return this.gate.getGateNumber();
  }
  
}