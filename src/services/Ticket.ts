import { Seat } from "../models/Seat"
// import {}

export class Ticket {
    private ticketNumber: string;
    private flightNumber: string;
    private ticketType:string;
    private seat: Seat;

    constructor(ticketNumber: string, flightNumber: string, ticketType: string, seat: Seat) {
        this.ticketNumber = ticketNumber;
        this.flightNumber = flightNumber;
        this.ticketType = ticketType;
        this.seat = seat;
    }

    public getTicketNumber(): string {
        return this.ticketNumber;
    }

    public getFlightNumber(): string {
        return this.flightNumber;
    }

    public getTicketType(): string {
        return this.ticketType;
    }

    public getSeat(): Seat {
        return this.seat;
    }
}