import { Airline } from "./Airline";
import { AirportController } from "./AirportController";
export class Airport {
    private airline: Airline[]
    private airportController= AirportController;
    constructor(private airportCode: string, private name: string,private address:string) {
        this.airportCode =airportCode;
        this.name = name;
        this.address=address;
    }
    getName():string{
        return this.name;
    }
    getAddress():string{
        return this.address;
    }
    
}