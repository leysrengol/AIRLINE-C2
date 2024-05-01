import { Seat } from "../models/Seat"
import { DepartureTicket } from "./Departure";
import { ReturnTicket } from "./ReturnTicket";
// import {}

export class Ticket {
    private ticketNumber: string;
    private flightNumber: string;
    private departure : DepartureTicket;
    private returnTicket ?: ReturnTicket;
    private seat: Seat;

    constructor(ticketNumber: string, flightNumber: string, departure: DepartureTicket, seat: Seat,returns?:ReturnTicket) {
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

    public getDepartureTicket(): DepartureTicket {
        return this.departure;
    }
    public getReturnTicket(): ReturnTicket {
        return this.returnTicket;
    }


    public getSeat(): Seat {
        return this.seat;
    }
}