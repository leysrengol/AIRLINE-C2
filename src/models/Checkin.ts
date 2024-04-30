import { Flight } from "./Flight";
import { Passanger } from "./Passanger";

export class Checkin {
    private checkedInPassengers: Passanger[] = [];
  
    constructor(private flight: Flight) {}
  
    checkInPassenger(passenger: Passanger): void {
      this.checkedInPassengers.push(passenger);
    }
  
    getCheckedInPassengers(): Passanger[] {
      return this.checkedInPassengers;
    }
  }