import { AirportController } from "../controllers/AirportController";
import { Pilot } from "../controllers/Pilot";
import { Gender } from "../enums/Enum";
import { Airport } from "../models/Airport";
import { DateTime } from "../models/DateTime";
import { Flight } from "../models/Flight";
import { Gate } from "../models/Gate";

// Create an airport
let airportController1 = new AirportController("Bro","To","04343",Gender.MALE,"20")
let airport = new Airport("ABC", "ABC Airport", "123 Main Street", airportController1);
const pilot = new Pilot("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
let date1 = new DateTime("Monday","2939");
// const flight = new Flight("DL123", "JFK", "LAX", date1,pilot);

// Create and add flights to the airport
const flight1 = new Flight("FL123", "New York", "London",date1,pilot);
const flight2 = new Flight("FL456", "Paris", "Tokyo",date1,pilot);

airport.addFlight(flight1);
airport.addFlight(flight2);

// Create gates
const gateA = new Gate("A1");
const gateB = new Gate("B2");

// Assign gates to flights
airport.assignGateToFlight("FL123", gateA);
airport.assignGateToFlight("FL456", gateB);

// Retrieve gate for a specific flight
const gateForFlight1 = airport.getGateForFlight("FL123");
if (gateForFlight1) {
  console.log(`Your plan is waiting at Gate ${gateForFlight1.getGateNumber()}`);
}





