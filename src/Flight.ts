import { Router } from "./Route";
import { Seat } from "./Seat";

export class Flight {
    private seat:Seat[]=[];
    private router:Router;
    constructor(private flightNumber: string,private destination: string,private arriveDetination:string) { 
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.arriveDetination = arriveDetination;

    }
    getFlightNumber():string{
        return this.flightNumber;
    }
    getDestination():string{
        return this.destination;
    }
    getArriveDetination():string{
        return this.arriveDetination;
    }
}