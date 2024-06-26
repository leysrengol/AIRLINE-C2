import { Passanger } from "./Passanger";
import { Pilot } from "../controllers/Pilot";
import { Route } from "./Route";
import { Seat } from "./Seat";
import { Gate } from "./Gate";
import { Airline } from "./Airline";
import { Airport } from "./Airport";
import { DateTime } from "./DateTime";

export class Flight {
  private seats: Seat[] = [];
  private route: Route;
  private passengers: Passanger[];
  private airline: Airline;
  private airport: Airport;
  private gate: Gate;
  pilot:Pilot;

  constructor(
    private flightNumber: string,
    private destination: string,
    private arriveDestination: string,
    private departureTime: DateTime,
    // private arrivalTime: DateTime,
    pilots: Pilot,
    route: Route
  ) {
    this.flightNumber = flightNumber;
    this.destination = destination;
    this.arriveDestination = arriveDestination;
    this.departureTime = departureTime;
    // this.arrivalTime = arrivalTime;
    this.passengers = [];
    this.pilot = pilots;
    this.route = route;
  }

  public addPassenger(passenger: Passanger): void {
    this.passengers.push(passenger);
  }

  public getPassengers(): Passanger[] {
    return this.passengers;
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

  getReturnTicketPassengerCount(): number {
    let returnTicketPassengerCount = 0;

    for (const passenger of this.passengers) {
      if (passenger.hasReturnTickets()) {
        returnTicketPassengerCount++;
      }
    }

    return returnTicketPassengerCount;
  }
  getdepartureTime(): DateTime {
    return this.departureTime;
  }
  // getArrivalTime(): DateTime {
  //   return this.arrivalTime;
  // }
  assignGate(gate: Gate): void {
    this.gate = gate;
  }
  getPilots(): Pilot{
    return this.pilot;
  }
  getGate(): Gate {
    return this.gate;
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
