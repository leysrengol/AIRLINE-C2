import { AirportController } from "../controllers/AirportController";
import { Pilot } from "../controllers/Pilot";
import { Gender } from "../enums/Enum";
import { Airline } from "../models/Airline";
import { Airplane } from "../models/Airplan";
import { Airport } from "../models/Airport";
import { DateTime } from "../models/DateTime";
import { Flight } from "../models/Flight";
import { Passanger } from "../models/Passanger";
import { Seat } from "../models/Seat";


let airportController1 = new AirportController("Bro","To","04343",Gender.MALE,"20")
let airport = new Airport("ABC", "ABC Airport", "123 Main Street", airportController1);
let passenger1 = new Passanger("Siem","Chou","068402014",Gender.MALE,airport,true);
let passenger2 = new Passanger("Siem","Chou","068402014",Gender.MALE,airport,true);
let seat1 = new Seat("A13");
let seat2 = new Seat("A15");
const pilot = new Pilot("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");
let date1 = new DateTime("Monday","2939");
let flight1 = new Flight('ABC123', 'New York'," Paris",date1,pilot);
// flight1.addSeat(seat1);
// passenger1.bookSeat(seat1);
let M1 = passenger1.bookSeat(seat1);
let M2 = passenger2.bookSeat(seat1);
console.log(M1);
console.log(M2);
// let a2 = passenger2.bookSeat(seat1)
// airplan1.checkSeat(seat1)
flight1.addSeat(seat1);
flight1.addSeat(seat2);
// seat1.book(passenger1)
let airplan1 = new Airplane("A005")

// console.log(seat1);
// seat1.isOccupied();
// console.log(airplan1);

// airplan1.getAvailableSeats();
console.log(airplan1.getAvailableSeats(flight1));
console.log(airplan1.checkSeat(seat1));

// console.log(airplan1.checkSeat(seat2));

// console.log(flight1.getSeats());



