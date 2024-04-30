import { Passanger } from "./Passanger";
import { Pilot } from "../controllers/Pilot";
import { Router } from "./Route";
import { Seat } from "./Seat";
import { Gate } from "./Gate";
import { Airline } from "./Airline";
import { Airport } from "./Airport";

export class Flight {
  private seats: Seat[] = [];
  private router: Router;
  private passengers: Passanger[];
  private airline: Airline;
  private airport: Airport;
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

  getGate(): Gate | undefined {
    return this.gate;
  }

  assignGate(gate: Gate): void {
    this.gate = gate;
  }

  addPassanger(passenger: Passanger): void {
    this.passengers.push(passenger);
  }

  removePassenger(passenger: Passanger): void {
    const index = this.passengers.indexOf(passenger);
    if (index !== -1) {
      this.passengers.splice(index, 1);
    }
  }

  getPassangerCount(): number {
    return this.passengers.length;
  }
  addSeat(seat:Seat):void{
    this.seats.push(seat);
  }

}

