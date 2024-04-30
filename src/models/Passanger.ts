import { Gender } from "../enums/Enum";
import { Airport } from "./Airport";
import { Booking } from "../services/Booking";
import { Person } from "./Person";
import { Meal } from "../services/Meal";

export class Passanger extends Person {
  private bookings: Booking[];
  private airport: Airport;
  private meal: Meal;

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


  

  

}