export class BookingTrips {
    private flightNumber: string;
    private origin: string;
    private destination: string;
    private startDate: Date;
    private arrivalDate: Date;
  
    constructor(flightNumber: string, origin: string, destination: string, startDate: Date, arrivalDate: Date) {
      this.flightNumber = flightNumber;
      this.origin = origin;
      this.destination = destination;
      this.startDate = startDate;
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
  
    public getStartDate(): Date {
      return this.startDate;
    }
  
    public getArrivalDate(): Date {
      return this.arrivalDate;
    }
  
    public setFlightNumber(flightNumber: string): void {
      this.flightNumber = flightNumber;
    }
  
    public setOrigin(origin: string): void {
      this.origin = origin;
    }
  
    public setDestination(destination: string): void {
      this.destination = destination;
    }
  
    public setStartDate(startDate: Date): void {
      this.startDate = startDate;
    }
  
    public setArrivalDate(arrivalDate: Date): void {
      this.arrivalDate = arrivalDate;
    }
  }