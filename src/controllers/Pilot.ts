import { Employee } from "./Employee";
import { Flight } from "../models/Flight";
import { Gender } from "../enums/Enum";

export class Pilot extends Employee {
    private flights:Flight[];
    constructor(firstName:string, lastName:string,contactInfo:string,gender:Gender,salary:string){
        super(firstName,lastName,contactInfo,gender,salary);
        this.flights=[];
    }
    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
    getFlight():Flight[]{
        return this.flights;
    }
    getNumberofFligtForDate(date: string): number {
        const flightsForDate = this.flights.filter(flight => {
            // Check if the flight's date matches the given date
            return flight.getdepartureTime().getDate() === date;
        });

        // Return the length of the filtered array
        return flightsForDate.length;
    }
}