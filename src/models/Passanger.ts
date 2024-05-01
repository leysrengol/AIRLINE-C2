import { Gender } from "../enums/Enum";
import { Airport } from "./Airport";
import { Booking } from "../services/Booking";
import { Person } from "./Person";
import { Meal } from "../services/Meal";
import { Gate } from "./Gate";
import { BookingFlight } from "../services/BookingFlight";
import { Flight } from "./Flight";
import { Seat } from "./Seat";

export class Passanger extends Person {
  private bookings: Booking[];
  private airport: Airport;
  private meal: Meal;
  private bookingFlight?: Flight;
  bookedFlight: Flight;
  

  constructor(
    firstName: string,
    lastName: string,
    contactInfo: string,
    gender: Gender,
    airport: Airport,
    private hasReturnTicket: boolean,
  ) {
    super(firstName, lastName, contactInfo, gender);
    this.bookings = [];
    this.airport = airport;
    
  }

  
  public hasReturnTickets(): boolean {
    return this.hasReturnTicket;
  }

  public addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  public getBookings(): Booking[] {
    return this.bookings;
  }

  public getAirport(): Airport {
    return this.airport;
  }
  public addMeal(meal: Meal): void {
    this.meal = meal;
  }
  public setMeal(meal: Meal): void {
    this.meal = meal;
  }

  public getMeal(): Meal {
    return this.meal;
  }

  bookFlight(flight: Flight): void {
    this.bookedFlight = flight;
    flight.addPassenger(this);
    console.log(`${this.getFullName()} has booked a flight to ${flight.getDestination()}.`);
  }

  cancelFlight(): void {
    if (this.bookedFlight) {
      this.bookedFlight.removePassenger(this);
      console.log(`${this.getFullName()} has canceled their flight to ${this.bookedFlight.getDestination()}.`);
      this.bookedFlight = undefined;
    } else {
      console.log(`${this.getFullName()} does not have a booked flight to cancel.`);
    }
  }
  bookSeat(seat: Seat): boolean {
      const isBookingSuccessful = seat.book(this);            
      if(isBookingSuccessful==true) {
         console.log("success");
         return true;
      }else{
        console.log("failure");
        return false
      }
  }
}