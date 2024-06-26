import { Airline } from "./Airline";
import { AirportController } from "../controllers/AirportController";
import { Flight } from "./Flight";
import { Gate } from "./Gate";

export class Airport {
  getFlightsForGate(arg0: string) {
      throw new Error("Method not implemented.");
  }
  private flights: { [flightNumber: string]: Flight } = {};
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

  public getName(): string {
    return this.name;
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

  addFlight(flight: Flight): void {
    this.flights[flight.getFlightNumber()] = flight;
  }

  getFlightByNumber(flightNumber: string): Flight {
    return this.flights[flightNumber];
  }

  assignGateToFlight(flightNumber: string, gate: Gate): void {
    const flight = this.getFlightByNumber(flightNumber);
    console.log(flight);
    
    if (flight) {
      flight.assignGate(gate);
      
    } else {
      console.log(`Flight ${flightNumber} not found.`);
    }
  }

  getGateForFlight(flightNumber: string): Gate {
    const flight = this.getFlightByNumber(flightNumber);    
    console.log(flight);
    
    if (flight) {
      return flight.getGate();
    } else {
      console.log(`Flight ${flightNumber} not found.`);
    }
  }




}