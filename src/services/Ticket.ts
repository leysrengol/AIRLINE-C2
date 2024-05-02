import { Seat } from "../models/Seat"

export class Ticket {
    private ticketNumber: string;
    private flightNumber: string;
    private departure : boolean;
    private returnTicket :boolean;
    private seat: Seat;

    constructor(ticketNumber: string, flightNumber: string, departure: boolean, seat: Seat,returns: boolean ){
        this.ticketNumber = ticketNumber;
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.seat = seat;
        this.returnTicket = returns;
    }

    public getTicketNumber(): string {
        return this.ticketNumber;
    }

    public getFlightNumber(): string {
        return this.flightNumber;
    }

    public getDepartureTicket(): boolean {
        return this.departure;
    }
    public getReturnTicket(): boolean {
        return this.returnTicket;
    }


    public getSeat(): Seat {
        return this.seat;
    }
}