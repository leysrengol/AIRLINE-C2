import { Booking } from "../services/Booking";
import { BookingTrips } from "../services/BookingTrip";
import { Gender } from "../enums/Enum";
import { FoodType } from "../enums/MealType";
import { Passanger } from "../models/Passanger";
import { Ticket } from "../services/Ticket";
import { Baggage } from "../services/Baggage";
import { BookingFlight } from "../services/BookingFlight";
import { Airport } from "../models/Airport";
import { AirportController } from "../controllers/AirportController";
import { AirlineManager } from "../controllers/AirlineManager";
import { Flight } from "../models/Flight";


const flight = new Flight("FL001", "London", "New York");
let airlinemanager = new AirlineManager("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
let airportController1 = new AirportController("Bro","To","04343",Gender.MALE,"20")
let airport = new Airport("ABC", "ABC Airport", "123 Main Street", airportController1);
let siem = new Passanger("Siem","Choub","068402014",Gender.FEMALE,airport,true);
flight.addPassenger(siem);
// airlinemanager.getReturnPassengerCount(flight.getFlightNumber());
console.log(airlinemanager.getReturnPassengerCount(flight.getFlightNumber()));
