import { Pilot } from "./Pilot";
import { Router } from "./Route";
import { Seat } from "./Seat";

export class Flight {
    private seat:Seat[]=[];
    private capitancePilot: Pilot;
    private pilot:Pilot;
    private router:Router;
    constructor(private flightNumber: string,private destination: string,private arriveDetination:string,capitance:Pilot,pilot:Pilot) { 
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.arriveDetination = arriveDetination;
        this.capitancePilot = capitance;
        this.pilot = pilot;

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
    getCapitancePilot():Pilot{
        return this.capitancePilot;
    }
    getPilot():Pilot{
        return this.pilot;
    }
    
    
}