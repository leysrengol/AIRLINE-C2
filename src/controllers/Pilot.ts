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
    getNumberofFligtForDate(date: string,names : string): number {
        const flightsForDate = this.flights.filter(flight => {
            return flight.getdepartureTime().getDate() === date && flight.pilot.getFullName() === names;            
        });
        return flightsForDate.length; 
    
    }
    getFlights(fullname:string):void{
        this.getFlight().forEach(fli =>{
           if(fli.pilot.getFullName()===fullname){
            console.log(fli);
           }
            
        })
    }
}