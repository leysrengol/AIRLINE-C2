import { Gender } from "../enums/Enum";
import { Passanger } from "../models/Passanger";
import { Booking } from "../services/Booking";
import { Employee } from "./Employee";

export class AirportController extends Employee {
    private bookings: Booking[];

    constructor(
        firstName: string,
        lastName: string,
        contactInfo: string,
        gender: Gender,
        salary: string,
        bookings: Booking[] = []
    ) {
        super(firstName, lastName, contactInfo, gender, salary);
        this.bookings = bookings;
    }

    getPassengerDetail(name: string): { booking: Booking, passenger: Passanger } | undefined {
        for (const booking of this.bookings) {
            const passenger = booking.getPassengerByName(name);
            if (passenger) {
                return { booking, passenger };
            }
        }
        return undefined;
    }

    addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }
}
