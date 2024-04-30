import { AirportController } from "../controllers/AirportController";
import { Gender } from "../enums/Enum";
import { Airport } from "../models/Airport";
import { Flight } from "../models/Flight";
import { Passanger } from "../models/Passanger";

// Create a new Flight
let flight1 = new Flight('ABC123', 'New York'," Paris");

let airportController1 = new AirportController("Bro","To","04343",Gender.MALE,"20")
let airport = new Airport("ABC", "ABC Airport", "123 Main Street", airportController1);

// Create Passengers
let passenger1 = new Passanger("Siem","Choub","068402014",Gender.FEMALE,airport,false);
let passenger2 = new Passanger('Alice', 'Siem','98564',Gender.FEMALE,airport,true);

// Book flights for passengers
passenger1.bookFlight(flight1);
passenger2.bookFlight(flight1);

console.log(`Passenger count for Flight 1: ${flight1.getPassangerCount()}`); // Output: 2

// Cancel a flight for a passenger
passenger1.cancelFlight();

console.log(`Passenger count for Flight 1 after cancellation: ${flight1.getPassangerCount()}`); // Output: 1
