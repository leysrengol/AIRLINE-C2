import { Gender } from "../enums/Enum";
import { Passanger } from "../models/Passanger";
import { TripDetails } from "../models/TripDetails";
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
    ) {
        super(firstName, lastName, contactInfo, gender, salary);
        this.bookings = [];
    }
    getBookingAndPassengerByPassengerName(name: string): { booking: Booking, passenger: Passanger } | undefined {
        for (const booking of this.bookings) {
            // const passenger = booking.getPassenger();
            // console.log(passenger);
            
            // if (passenger.getFirstName() === name) {
            //     return { booking, passenger };
            // }
        }
        return undefined;
    }
    addBookings(booking: Booking): void {
        this.bookings.push(booking);
    }
}