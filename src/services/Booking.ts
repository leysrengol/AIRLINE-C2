import { Passanger } from "../models/Passanger";
import { BookingFlight } from "./BookingFlight";
import { BookingTrips } from "./BookingTrip";
import { Ticket } from "./Ticket";

export class Booking {
  private bookingReferenceNumber: string;
  private trip: BookingTrips;
  private ticket: Ticket;
  private bookingFlight: BookingFlight;
  private passengers: Passanger[];

  constructor(bookingReference: string, ticket: Ticket, bookingFlight: BookingFlight, trip: BookingTrips,  passengers: Passanger[]) {
    this.bookingReferenceNumber = bookingReference;
    this.ticket = ticket;
    this.bookingFlight = bookingFlight;
    this.trip = trip;
    this.passengers = passengers;
  }

  // Getter methods
  public getTicket(): Ticket {
    return this.ticket;
  }

  public getBookingFlight(): BookingFlight {
    return this.bookingFlight;
  }

  public getBookingReferenceNumber(): string {
    return this.bookingReferenceNumber;
  }

  public getTrip(): BookingTrips {
    return this.trip;
  }

  // Get passenger by name
  public getPassengerByName(name: string): Passanger | undefined {
    return this.passengers.find(passenger => passenger.getFirstName() === name);
  }

  // Setter methods
  public setBookingFlight(bookingFlight: BookingFlight): void {
    this.bookingFlight = bookingFlight;
  }
  addpassenger(passenger:Passanger): void {
    this.passengers.push(passenger);
  }
}
