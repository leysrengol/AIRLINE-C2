import { AirlineManager } from "../controllers/AirlineManager";
import { Chef } from "../controllers/Chef";
import { CrewMember } from "../models/CrewMember";
import { Gender } from "../enums/Enum";
import { Pilot } from "../controllers/Pilot";
import { FlightSchedule } from "../models/FlightSchedule";
import { DateTime } from "../models/DateTime";
import { Flight } from "../models/Flight";
import { Seat } from "../models/Seat";
import { Ticket } from "../services/Ticket";
import { Passanger } from "../models/Passanger";
import { Airport } from "../models/Airport";
import { AirportController } from "../controllers/AirportController";
import { BookingFlight } from "../services/BookingFlight";
import { Booking } from "../services/Booking";
import { Meal } from "../services/Meal";
import { MealType } from "../enums/MealType";
import { Gate } from "../models/Gate";
import { Airplane } from "../models/Airplan";
import { BookingTrips } from "../services/BookingTrip";
import { Route } from "../models/Route";
import { Baggage } from "../services/Baggage";


const airportController = new AirportController("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
let airlinemanager = new AirlineManager("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const airport = new Airport("JFK", "John F. Kennedy International Airport", "New York City, NY", airportController);

const flightSchedule = new FlightSchedule();
let date1 = new DateTime("2024-04-28","12:00:00");
let date2 = new DateTime("2024-04-28","1:20:00");

let pilot1 = new Pilot("Jane", "Doe", "jane.doe@example.com", Gender.FEMALE, "2000");
let pilot2 = new Pilot("Liza","OL","liza.ol@gmail.com",Gender.FEMALE,"600"); 
let crewmember = new CrewMember("Bopha", "San", "bopha.san@example.com", Gender.MALE, "3000");
let chef = new Chef("Sokha", "Sok", "sokha.sok@example.com", Gender.MALE, "4000");

let route1 = new Route("CAMBODIA","USA");
const flight1 = new Flight("FL123","Cambodia","US",date1,pilot1,route1);
const flight2 = new Flight("FL456","Japance","switzerland",date2,pilot2,route1);

const passenger1 = new Passanger("John","haha","068402014", Gender.MALE,airport,true);
const seat = new Seat("A1");
const ticket = new Ticket("T123456789", "DL123",true,seat,true);
const bookingFlight = new BookingFlight(flight1, ticket, seat,[],false);
const trip = new BookingTrips("01","Cambodua","Japan",new Date("20240-2-02,15:00"),new Date("2024-03-02,15:00"))
const passenger2 = new Passanger("John Doe","haha","068402014", Gender.MALE,airport,true);

const booking = new Booking( "001",ticket, bookingFlight,trip,[]);

const meal1 = new Meal(MealType.Chicken);
const meal2 = new Meal(MealType.Beef);

const gateA = new Gate("A111");
const gateB = new Gate("A222");

let airplan1 = new Airplane("A005")

let seat1 = new Seat("A13");
let seat2 = new Seat("A15");

let bags1 = new Baggage("A001","15");


// AIRPORT GATE
airport.addFlight(flight1);
airport.addFlight(flight2);
airport.assignGateToFlight("FL123", gateA);
airport.assignGateToFlight("FL456", gateB);
// console.log(airport.assignGateToFlight("FL456", gateB));


//  GET ALL EMPLOYEE SALARY
airlinemanager.addEmployee(pilot1);
airlinemanager.addEmployee(crewmember);
airlinemanager.addEmployee(chef);
let totalSalary =  airlinemanager.getTotalSalaryPaid();
console.log(totalSalary);
 

// PILOT FLIGHTS
flightSchedule.addFlight(flight1);
flightSchedule.addFlight(flight2);
pilot1.addFlight(flight1);
pilot1.addFlight(flight2);
const dateToCheck = "2024-04-28";
const numberOfFlights = pilot1.getNumberofFligtForDate(dateToCheck);
console.log("Number of flights for the pilot:", numberOfFlights);


// PASSENGER BOOKED SEAT
let M1 = passenger1.bookSeat(seat1);
let M2 = passenger2.bookSeat(seat1);
flight1.addSeat(seat1);
flight1.addSeat(seat2);
console.log(airplan1.getAvailableSeats(flight1));
console.log(airplan1.checkSeat(seat1));
console.log(M1);
console.log(M2);




// PASSENGER HAS RETURN TICKET
airlinemanager.addBooking(booking)
const returnPassengerCount = airlinemanager.getReturnPassengerCount("DL123");
console.log("Return passenger count for flight DL123:", returnPassengerCount);


// PASSENGER LIST IN A FLIGHT
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);


// TOTAL MEAL FOR CHEF
passenger1.addMeal(meal1);
passenger2.addMeal(meal2);
const totalMealCount = chef.getMealCountForFlight(flight1);
console.log("Total meal count for the flight " + flight1.getFlightNumber() + " :", totalMealCount);
console.log(`${meal1.getName()}: ${totalMealCount}`);
console.log(`${meal2.getName()}: ${totalMealCount}`);


// PASSENGER GATE
const gateForFlight1 = airport.getGateForFlight("FL123");
if (gateForFlight1) {
  console.log(`Your plan is waiting at Gate ${gateForFlight1.getGateNumber()}`);
}


// PASSENGER CANCLE TICKET
console.log(`Passenger count for Flight 1: ${flight1.getPassangerCount()}`); // Output: 2

passenger1.cancelFlight();
console.log(`Passenger count for Flight 1 after cancellation: ${flight1.getPassangerCount()}`);
booking.addpassenger(passenger1);
passenger1.addBooking(booking);
airportController.addBooking(booking);
console.log(airportController.getPassengerDetail("John"));
console.log(ticket.getSeat());


// Fight Route
passenger1.addBaggges(bags1);
// console.log(passenger1);




