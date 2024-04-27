import { Flight } from "../models/Flight";
import { Seat } from "../models/Seat";
import { Ticket } from "./Ticket";

export class BookingFlight {
  private flight: Flight;
  private ticket: Ticket;
  private seat: Seat;

  constructor(flight: Flight, ticket: Ticket, seat: Seat) {
    this.flight = flight;
    this.ticket = ticket;
    this.seat = seat;
  }

  public getFlight(): Flight {
    return this.flight;
  }

  public getTicket(): Ticket {
    return this.ticket;
  }

  public getSeat(): Seat {
    return this.seat;
  }

  public setFlight(flight: Flight): void {
    this.flight = flight;
  }

  public setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  public setSeat(seat: Seat): void {
    this.seat = seat;
  }
}