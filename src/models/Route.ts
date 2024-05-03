import { Airport } from "./Airport";
import { DateTime } from "./DateTime";


export class Route {
    private airport: Airport;
    constructor(public origin: string, public destination: string) {}
  
    getAirport(){
        return this.airport
    }
}
