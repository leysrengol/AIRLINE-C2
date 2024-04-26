import { Airline } from "./Airline";
import { AirportController } from "./AirportController";

export class Airport {
  private airline: Airline[];
  private airportController: AirportController;
  private airportCode: string;
  private name: string;
  private address: string;

  constructor(airportCode: string, name: string, address: string,airportManager: AirportController) {
    this.airline = [];
    this.airportCode = airportCode;
    this.name = name;
    this.address = address;
    this.airportController = airportManager;
  }

  public getAirportCode(): string {
    return this.airportCode;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getAirlines(): Airline[] {
    return this.airline;
  }

  public addAirline(airline: Airline): void {
    this.airline.push(airline);
  }

  public removeAirline(airline: Airline): void {
    const index = this.airline.indexOf(airline);
    if (index !== -1) {
      this.airline.splice(index, 1);
    }
  }

  public getAirportController(): AirportController {
    return this.airportController;
  }
}