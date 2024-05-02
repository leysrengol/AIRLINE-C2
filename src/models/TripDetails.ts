import { Baggage } from "../services/Baggage";
import { BookingTrips } from "../services/BookingTrip";
import { Flight } from "./Flight";
import { Passanger } from "./Passanger"; 

export class TripDetails {
    constructor(
        public bookingReferenceNumber: string,
        public flights: Flight[],
        public trip: BookingTrips,
        public bags: Baggage[],
        public passengers: Passanger[] 
    ) {}
}
