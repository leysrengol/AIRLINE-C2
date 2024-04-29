import { Flight } from '../models/Flight';
import { Passanger } from '../models/Passanger';
import { Meal } from '../services/Meal';
import { MealTime } from '../enums/MealTime';
import {MealType } from '../enums/MealType';
import { Gender } from '../enums/Enum';
import { Airport } from '../models/Airport';
import { AirportController } from '../controllers/AirportController';
import { Chef } from '../controllers/Chef';
import { Pilot } from '../controllers/Pilot';
import { DateTime } from '../models/DateTime';

const pilot = new Pilot("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");

// Create a new flight instance
let date1 = new DateTime("Monday","2939");
const flight = new Flight("NYL123", "New York", "London",date1,pilot);

const airportController = new AirportController("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
const airport = new Airport("JFK", "John F. Kennedy International Airport", "New York City, NY", airportController);

const passanger1 = new Passanger("Alice", "Smith", "alice@example.com", Gender.FEMALE, airport, true);
const passanger2 = new Passanger("Bob", "Johnson", "bob@example.com", Gender.MALE, airport, true);
const passanger3 = new Passanger("Charlie", "Brown", "charlie@example.com", Gender.MALE, airport, false);
const passanger4 = new Passanger("David", "Lee", "david@example.com", Gender.MALE, airport, false);
const passanger5 = new Passanger("Eve", "Wilson", "eve@example.com", Gender.FEMALE, airport, true);



// Add passengers to the flight
flight.addPassenger(passanger1);
flight.addPassenger(passanger2);
flight.addPassenger(passanger3);
flight.addPassenger(passanger4);
flight.addPassenger(passanger5);

