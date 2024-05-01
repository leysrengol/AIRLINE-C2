// Import necessary classes
import { Airport } from "../models/Airport";
import { Airline } from "../models/Airline";
import { Flight } from "../models/Flight";
import { Seat } from "../models/Seat";
import { Ticket } from "../services/Ticket";
import { Passanger } from "../models/Passanger";
import { Booking } from "../services/Booking";
import { BookingFlight } from "../services/BookingFlight";
import { AirportController } from "../controllers/AirportController";
import { AirlineManager } from "../controllers/AirlineManager";
import { Gender } from "../enums/Enum";
import { DateTime } from "../models/DateTime";
import { Pilot } from "../controllers/Pilot";
import { MealType } from "../enums/MealType";
import { Meal } from "../services/Meal";
import { DepartureTicket } from "../services/Departure";
import { ReturnTicket } from "../services/ReturnTicket";

const airline = new Airline("Delta Airlines", "delta@delta.com");
const airportController = new AirportController("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const pilot = new Pilot("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const airport = new Airport("JFK", "John F. Kennedy International Airport", "New York City, NY", airportController);
let date1 = new DateTime("Monday","2939");
const flight = new Flight("DL123", "JFK", "LAX", date1,pilot);
const seat = new Seat("A1");
let departure = new DepartureTicket("300")
let returns = new ReturnTicket("500");

const ticket = new Ticket("T123456789", "DL123",departure,seat,returns);
const bookingFlight = new BookingFlight(flight, ticket, seat);
const passenger = new Passanger("John Doe","haha","068402014", Gender.MALE,airport,true);

// const ticket = new Ticket("T123456789", "DL123", "return",seat );
// const bookingFlight = new BookingFlight(flight, ticket, seat);
// const passenger = new Passanger("John Doe","haha","068402014", Gender.MALE,airport,true, );

const booking = new Booking( ticket, bookingFlight,passenger);

const airlineManager = new AirlineManager("Alice", "Smith", "alice.smith@delta.com", Gender.FEMALE, "10000");

airlineManager.addBooking(booking)
const returnPassengerCount = airlineManager.getReturnPassengerCount("DL123");
console.log("Return passenger count for flight DL123:", returnPassengerCount);
// console.log(booking);

