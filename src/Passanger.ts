
import { Airport } from "./Airport";
import { Booking } from "./Booking";
import { Person } from "./Person";

export class Passanger extends Person {
    private bookings: Booking[];
    private airport: Airport;

    constructor(
        firstName: string,
        lastName: string,
        contactInFo:string ,
        private airPort:Airport,
        private hasReturnTicket: boolean,
        private ticketFrom: string
    ) {
        super(firstName, lastName,contactInFo);
        this.bookings = [];
        this.airport = airPort;
    }

    public hasReturnTickets(): boolean {
        return this.hasReturnTicket;
    }

    public getTicketFrom(): string {
        return this.ticketFrom;
    }

    public addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }

    public getBookings(): Booking[] {
        return this.bookings;
    }

    public getAirport(): Airport {
        return this.airport;
    }
}