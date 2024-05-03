import { DateTime } from "../models/DateTime";

export class BookingTrips {
    private flightNumber: string;
    private origin: string;
    private destination: string;
    private startDateTime: DateTime;
    private arrivalDate: DateTime;
  
    constructor(flightNumber: string, origin: string, destination: string, startDate: DateTime, arrivalDate: DateTime) {
      this.flightNumber = flightNumber;
      this.origin = origin;
      this.destination = destination;
      this.startDateTime = startDate;
      this.arrivalDate = arrivalDate;
    }
  
    public getFlightNumber(): string {
      return this.flightNumber;
    }
  
    public getOrigin(): string {
      return this.origin;
    }
  
    public getDestination(): string {
      return this.destination;
    }
  
    public getStartDate(): DateTime {
      return this.startDateTime;
    }
  
    public getArrivalDate(): DateTime {
      return this.arrivalDate;
    }
  }