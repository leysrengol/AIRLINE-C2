// Import necessary modules and classes
import { Pilot } from "../controllers/Pilot";
import { FlightSchedule } from "../models/FlightSchedule";
import { Flight } from "../models/Flight";
import { Gender } from "../enums/Enum";
import { DateTime } from "../models/DateTime";


// Create a FlightSchedule instance
const flightSchedule = new FlightSchedule();
let date1 = new DateTime("2024-04-28","12:00:00");
let date2 = new DateTime("2024-04-28","1:20:00");

//Create Pilot
let Pilot1 = new Pilot("Leysreng","OL","leysreng.ol@gmail.com",Gender.FEMALE,"600"); 
let Pilot2 = new Pilot("Liza","OL","liza.ol@gmail.com",Gender.FEMALE,"600"); 


// Create some flights
const flight1 = new Flight("ABC123","Cambodia","US",date1,Pilot1);
const flight2 = new Flight("DEF456","Japance","switzerland",date2,Pilot2);

// Add flights to the schedule
flightSchedule.addFlight(flight1);
flightSchedule.addFlight(flight2);
console.log(flight1)

// add filght to pilot
Pilot1.addFlight(flight1);
Pilot1.addFlight(flight2)
// Get the number of flights for a given date
const dateToCheck = "2024-04-28"
// const numberOfFlights = flightSchedule.getNumberofFligtForDate(dateToCheck);
// console.log("Number of flights for 2024-04-29:", numberOfFlights);

const numberOfFlights = Pilot1.getNumberofFligtForDate(dateToCheck);
console.log("Number of flights for the pilot:", numberOfFlights);




