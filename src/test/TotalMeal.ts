import { AirportController } from "../controllers/AirportController";
import { Chef } from "../controllers/Chef";
import { Gender } from "../enums/Enum";
import { Airport } from "../models/Airport";
import { Flight } from "../models/Flight";
import { Passanger } from "../models/Passanger";
import { Pilot } from "../controllers/Pilot"; // Import Pilot class
import { Meal } from "../services/Meal"; // Import Meal class
import { MealType } from "../enums/MealType";
import { DateTime } from "../models/DateTime";

// Create a Pilot object
const pilot = new Pilot("John", "Doe", "john@example.com", Gender.MALE, "5000");

// Create Meal objects with meal details
const meal1 = new Meal(MealType.Chicken);
const meal2 = new Meal(MealType.Beef);
// Assuming you have already instantiated a Chef object
const chef = new Chef("John", "Doe", "john@example.com", Gender.MALE, "5000");

// Create an Airport object
const airportController = new AirportController("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const airport = new Airport("JFK", "John F. Kennedy International Airport", "New York City, NY", airportController);

let date1 = new DateTime("Monday","2939");
const flight = new Flight("DL123", "JFK", "LAX", date1,pilot);// Provide departure time

const passenger1 = new Passanger("John", "Doe", "068402014", Gender.MALE, airport, true);
const passenger2 = new Passanger("Jane", "Smith", "068402015", Gender.FEMALE, airport, true);
passenger1.addMeal(meal1);
passenger2.addMeal(meal2);

flight.addPassenger(passenger1);
flight.addPassenger(passenger2);


// Call the getMealCountForFlight method to get the total meal count for the flight
const totalMealCount = chef.getMealCountForFlight(flight);

console.log("Total meal count for the flight " + flight.getFlightNumber() + " :", totalMealCount);
console.log(`${meal1.getName()}: ${totalMealCount}`);
console.log(`${meal2.getName()}: ${totalMealCount}`);
