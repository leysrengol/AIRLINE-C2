import { Baggage } from "../services/Baggage";
import { Flight } from "./Flight";
import { Passanger } from "./Passanger";

export class TripDetails {
    constructor(
        public bookingReferenceNumber: string,
        public flights: Flight[],
        public bags: Baggage[],
        public passenger: Passanger
    ) {}
}