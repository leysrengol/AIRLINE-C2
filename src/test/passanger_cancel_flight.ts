import { AirportController } from "../controllers/AirportController";
import { Pilot } from "../controllers/Pilot";
import { Gender } from "../enums/Enum";
import { Airport } from "../models/Airport";
import { DateTime } from "../models/DateTime";
import { Flight } from "../models/Flight";
import { Passanger } from "../models/Passanger";

// Create a new Flight
// let airport = new Airport("ABC", "ABC Airport", "123 Main Street", airportController1);
const pilot = new Pilot("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
let date1 = new DateTime("Monday","2939");
let flight1 = new Flight('ABC123', 'New York'," Paris",date1,pilot);

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
