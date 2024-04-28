import { Gender } from "../enums/Enum";
import { TripDetails } from "../models/TripDetail";
import { Booking } from "../services/Booking";
import { Employee } from "./Employee";

export class AirportController extends Employee {
    private bookings: Booking[];

    constructor(
        firstName: string,
        lastName: string,
        contactInfo: string,
        gender: Gender,
        salary: string
    ) {
        super(firstName, lastName, contactInfo, gender, salary);
        this.bookings = [];
    }

    // public getTripDetails(bookingReferenceNumber: string): TripDetails | null {
    //     const booking: Booking | undefined = this.bookings.find(booking => booking.getBookingReferenceNumber() === bookingReferenceNumber);

    //     if (booking) {
    //         const flights = booking.getFlights();
    //         const bags = booking.getBags();
    //         const passenger = booking.getPassenger();
    //         return new TripDetails(bookingReferenceNumber, flights, bags, passenger);
    //     }

    //     return null;
    // }
}
