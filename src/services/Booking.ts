import { BookingTrips } from "./BookingTrip";
import { Passanger } from "../models/Passanger";
import { Ticket } from "./Ticket";
import { BookingFlight } from "./BookingFlight";

export class Booking {
  private bookingReferenceNumber: string;
  private trip: BookingTrips;
  private ticket: Ticket;
  private bookingFlight: BookingFlight;

  constructor(bookingReference:string,ticket: Ticket, bookingFlight: BookingFlight,trip:BookingTrips) {
    this.bookingReferenceNumber = bookingReference;
    this.ticket = ticket;
    this.bookingFlight = bookingFlight;
    this.trip = trip;
  }
  public getTicket(): Ticket {
    return this.ticket;

  }
  public getBookingFlight(): BookingFlight {
    return this.bookingFlight;
  }

  public setBookingFlight(bookingFlight: BookingFlight): void {
    this.bookingFlight = bookingFlight;
  }
  
}