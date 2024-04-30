import { Flight } from "./Flight";

export class Airline{
    private flights: Flight[] = [];
    constructor(private airlineCode:string, private airlineName:string){
        this.airlineCode=airlineCode;
        this.airlineName=airlineName;
    }
    getAirlineCode():string{
        return this.airlineCode;
    }
    getAirlineName():string{
        return this.airlineName;
    }
}