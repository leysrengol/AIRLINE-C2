import { DateTime } from "./DateTime";
import { Flight } from "./Flight";

export class FlightSchedule {
    private flights: Flight[] = [];

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }

    getNumberofFligtForDate(date: string): number {
        const flightsForDate = this.flights.filter(flight => {
            // Check if the flight's date matches the given date
            return flight.getdepartureTime().getDate() === date;
        });

        // Return the length of the filtered array
        return flightsForDate.length;
    }
}
