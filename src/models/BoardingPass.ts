import { Flight } from "./Flight";
import { Passanger } from "./Passanger";

export class BoardingPass {
    constructor(
      private passenger: Passanger,
      private flight: Flight,
      private gate: string,
      private seatNumber: string
    ) {}
  
    printBoardingPass(): void {
      console.log("Boarding Pass:");
      console.log("Passenger: ", this.passenger.getfirstName());
      console.log("Flight: ", this.flight.getFlightNumber());
      console.log("Gate: ", this.gate);
      console.log("Seat Number: ", this.seatNumber);
    }
  }