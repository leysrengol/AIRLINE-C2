import { BookingTrips } from "./BookingTrip";
import { Meal } from "./MealType";
import { Passanger } from "./Passanger";
import { Ticket } from "./Ticket";
import { Bagage } from "./bagage";


export class Booking {
    private passanger: Passanger;
    private bagager: Bagage[] = [];
    private meal?:Meal[]
    private trip:BookingTrips;
    
    constructor(private ticket: Ticket){
        this.ticket = ticket;
    }
    getTickets(){
        return this.ticket;
    }
    getMeals(){
        return this.meal;
    }
    getPassangers(){
        return this.passanger;
    }
}