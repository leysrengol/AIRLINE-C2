import { BookingTrips } from "./BookingTrip";
import { Meal } from "../services/Meal";
import { Passanger } from "../models/Passanger";
import { Ticket } from "./Ticket";
import { Baggage } from "./Baggage";
import { BookingFlight } from "./BookingFlight";

export class Booking {
  private passenger: Passanger;
  private baggage: Baggage[] = [];
  private meals?: Meal[] = [];
  private trip: BookingTrips;
  private ticket: Ticket;
  private bookingFlight: BookingFlight;

  constructor(ticket: Ticket, bookingFlight: BookingFlight) {
    this.ticket = ticket;
    this.bookingFlight = bookingFlight;
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